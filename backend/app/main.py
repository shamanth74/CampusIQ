from fastapi import FastAPI
from app.database.db import engine, Base
import app.database.base

app = FastAPI(
    title="CampusIQ API",
    version="1.0"
)


Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"message": "CampusIQ backend running 🚀"}