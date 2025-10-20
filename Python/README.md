# generales

1. python -m venv .venv
2. .venv\Scripts\Activate.ps1
3. Get-Command python
4. python -m pip install --upgrade pip
5. pip install -r requirements.txt
6. fastapi dev app/main.py
7. deactivate

# docker

1. docker build -t myimage .
2. docker run -d --name mycontainer -p 80:80 myimage