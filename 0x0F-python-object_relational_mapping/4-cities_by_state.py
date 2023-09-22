#!/usr/bin/python3

"""
A script that takes in an argument and displays all values in the states table
 of hbtn_0e_0_usa where name matches the argument.

"""


if __name__ == "__main__":
    import sys
    import MySQLdb

    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])
    cursor = db.cursor()
    sql = "SELECT cities.id, cities.name, states.name\
                FROM cities LEFT JOIN states\
                ON states.id = cities.state_id\
                ORDER BY cities.id ASC"
    cursor.execute(sql)
    result = cursor.fetchall()
    for item in result:
        print(item)
    cursor.close()
    db.close()
