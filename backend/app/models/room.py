from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.db import Base


class Room(Base):

    __tablename__ = "rooms"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)

    admin_id = Column(Integer, ForeignKey("users.id"))