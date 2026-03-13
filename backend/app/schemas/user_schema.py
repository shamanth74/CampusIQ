from typing import Optional
from pydantic import BaseModel


class UserSyncRequest(BaseModel):
    clerk_id: str
    email: str
    username: str


class UserResponse(BaseModel):
    id: int
    clerk_id: str
    email: str
    username: Optional[str]

    model_config = {"from_attributes": True}
