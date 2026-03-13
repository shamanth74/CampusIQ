from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.db import get_db
from app.models.user import User
from app.schemas.user_schema import UserSyncRequest, UserResponse

router = APIRouter(prefix="/users", tags=["Users"])


@router.post("/sync", response_model=UserResponse)
def sync_user(payload: UserSyncRequest, db: Session = Depends(get_db)):
    """
    Sync a Clerk user with the local database.
    - If the user already exists (by clerk_id), return the existing record.
    - Otherwise, create a new user and return it.
    """
    existing_user = db.query(User).filter(User.clerk_id == payload.clerk_id).first()

    if existing_user:
        return existing_user

    new_user = User(
        clerk_id=payload.clerk_id,
        email=payload.email,
        username=payload.username,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
