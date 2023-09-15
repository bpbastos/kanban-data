from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import relationship, backref
from fastapi_utils.guid_type import GUID, GUID_SERVER_DEFAULT_POSTGRESQL

from models.base import BaseModel
from models.task import Task

class SubTask(BaseModel):
    __tablename__ = 'subtask'

    id = Column(GUID, primary_key=True, server_default=GUID_SERVER_DEFAULT_POSTGRESQL)
    title = Column(String, nullable=False)
    order = Column(Integer, nullable=False)
    done = Column(Boolean, nullable=False)
    
    task_id = Column(GUID, ForeignKey(Task.id), nullable=False)

    task = relationship("Task", back_populates="subtasks", lazy="joined")

    def __init__(self, title, order, done, task_id, user_id):
        self.title = title
        self.order = order
        self.done = done
        self.task_id = task_id
        super().__init__(user_id)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'order': self.order,
            'done': self.done
        }
