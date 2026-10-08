from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
)

@app.post("/api/chat")
async def handle_chat(request: Request):
    data = await request.json()
    return {"response": f"TeachBot: {data['message']}"}