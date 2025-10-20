CREATE OR REPLACE FUNCTION add_automatic_evaluation (
  p_resource_id uuid,
  p_num_microdata numeric,
  p_num_microformats numeric,
  p_num_rdfa numeric,
  p_num_jsonld numeric,
  p_num_vocabularies numeric,
  p_num_ontologies numeric,
  p_num_datasets numeric,
  p_fair_score numeric,
  p_f1_score numeric,
  p_f2_score numeric,
  p_f3_score numeric,
  p_f4_score numeric,
  p_i1_score numeric,
  p_i2_score numeric,
  p_i3_score numeric,
  p_seo_score numeric,
  p_accesibility_score numeric,
  p_performance_score numeric
)
RETURNS VOID LANGUAGE PLPGSQL 
SET search_path = public
AS $$
DECLARE
  d_automatic_evaluation_id uuid := gen_random_uuid();
BEGIN
  INSERT INTO public.automatic_evaluation (
    id,
    num_microdata,
    num_microformats,
    num_rdfa, 
    num_jsonld, 
    num_vocabularies, 
    num_ontologies, 
    num_datasets, 
    fair_score, 
    f1_score, 
    f2_score, 
    f3_score, 
    f4_score, 
    i1_score, 
    i2_score, 
    i3_score, 
    seo_score, 
    accesibility_score, 
    performance_score
  )
  VALUES (
    d_automatic_evaluation_id,
    p_num_microdata,
    p_num_microformats,
    p_num_rdfa,
    p_num_jsonld,
    p_num_vocabularies,
    p_num_ontologies,
    p_num_datasets,
    p_fair_score,
    p_f1_score,
    p_f2_score,
    p_f3_score,
    p_f4_score,
    p_i1_score,
    p_i2_score,
    p_i3_score,
    p_seo_score,
    p_accesibility_score,
    p_performance_score 
  );

  UPDATE public.resource
  SET automatic_evaluation_id = d_automatic_evaluation_id
  WHERE id = p_resource_id;
END
$$;