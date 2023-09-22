#!/usr/bin/python3

"""
This file contains  the class definition of a State and an instance
 Base = declarative_base():
 Links to MySQL table States.
"""


from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class State(Base):
    """ Defines class State, an object representation of table states
    from database hbtn_0e_6_usa.
    class attributes:
                     id = column id from table states
                     name = column name from table states
    """

    __tablename__ = 'states'
    id = Column(Integer, nullable=False, primary_key=True, unique=True,
                autoincrement=True)
    name = Column(String(128), nullable=False)
