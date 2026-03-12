from sqlalchemy import Column, Integer, String, Text, ForeignKey
from app.database.db import Base


class Circular(Base):

    __tablename__ = "circulars"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)

    content = Column(Text)

    room_id = Column(Integer, ForeignKey("rooms.id"))

    uploaded_by = Column(Integer, ForeignKey("users.id"))