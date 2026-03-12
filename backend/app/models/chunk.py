from sqlalchemy import Column, Integer, Text, ForeignKey
from app.database.db import Base


class Chunk(Base):

    __tablename__ = "chunks"

    id = Column(Integer, primary_key=True)

    circular_id = Column(Integer, ForeignKey("circulars.id"))

    content = Column(Text)