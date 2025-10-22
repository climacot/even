from fastapi import FastAPI, Request
from supabase import create_client, Client
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import traceback
import requests
import uvicorn
import os

load_dotenv()

google_url = os.getenv("GOOGLE_URL")
google_api_key = os.getenv("GOOGLE_KEY")
fuji_url = os.getenv("FUJI_URL")
technologies_url = os.getenv("TECHNOLOGIES_URL")
url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(url, key)

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
async def read_root(request: Request):
    try:
        auth_header = request.headers.get("Authorization")
        access_token = auth_header.split(" ")[1]
        
        scoped_supabase_client = supabase.postgrest.auth(access_token)
        response = scoped_supabase_client.rpc("get_unevaluated_resources", params={}).execute()
        
        for resource in response.data:
            resource_id = resource["id"]
            web_url = resource["url"]
            
            response = requests.post(
                url= fuji_url,
                json= {
                    "object_identifier": web_url,
                    "metadata_service_type": "oai_pmh",
                    "metric_version": "metrics_v0.8",
                    "use_datacite": True,
                    "use_github": False,
                    "test_debug": True,
                },
                headers={
                    "Authorization": "Basic bWFydmVsOndvbmRlcndvbWFu",
                    "Content-Type": "application/json",
                    "accept": "application/json",
                }
            )
            
            data = response.json()

            f1 = data["summary"]["score_percent"]["F1"]
            f2 = data["summary"]["score_percent"]["F2"]
            f3 = data["summary"]["score_percent"]["F3"]
            f4 = data["summary"]["score_percent"]["F4"]
            i1 = data["summary"]["score_percent"]["I1"]
            i2 = data["summary"]["score_percent"]["I2"]
            i3 = data["summary"]["score_percent"]["I3"]
            fair_total = data["summary"]["score_percent"]["FAIR"]

            response = requests.post(
                url=technologies_url,
                json={
                    "url": web_url
                }
            )
            
            tecnologies = response.json()
            
            microformats = tecnologies["microformats"]
            microdata = tecnologies["microdata"]
            jsonLd = tecnologies["jsonLd"]
            rdfa = tecnologies["rdfa"]
            vocabularies = tecnologies["vocabularies"]
            ontologies = tecnologies["ontologies"]
            datasets = tecnologies["datasets"]
        
            response = requests.get(
                url=google_url,
                params={
                    "url": web_url,
                    "key": google_api_key,
                    "category": ["accessibility", "performance", "seo"]
                }
            )
            
            google = response.json()
            
            seo = google["lighthouseResult"]["categories"]["seo"]["score"]
            accessibility = google["lighthouseResult"]["categories"]["accessibility"]["score"]
            performance = google["lighthouseResult"]["categories"]["performance"]["score"]
            
            scoped_supabase_client.rpc("add_automatic_evaluation", params={
                "p_resource_id": resource_id,
                "p_num_microdata": microdata,
                "p_num_microformats": microformats,
                "p_num_rdfa": rdfa,
                "p_num_jsonld": jsonLd,
                "p_num_vocabularies": vocabularies,
                "p_num_ontologies": ontologies,
                "p_num_datasets": datasets,
                "p_fair_score": fair_total,
                "p_f1_score": f1,
                "p_f2_score": f2,
                "p_f3_score": f3,
                "p_f4_score": f4,
                "p_i1_score": i1,
                "p_i2_score": i2,
                "p_i3_score": i3,
                "p_seo_score": seo,
                "p_accesibility_score": accessibility,
                "p_performance_score": performance
            }).execute()
    except Exception:
        traceback.print_exc()

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)