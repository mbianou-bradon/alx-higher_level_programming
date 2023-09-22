#!/usr/bin/python3

"""
Concept tested:  SQL Injection

A script that takes in an argument and displays all values in the states table
 of hbtn_0e_0_usa where name matches the argument.
"""


if __name__ == "__main__":
    import sys
    import MySQLdb

    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])

    cursor = db.cursor()
    value = ""
    for char in sys.argv[4]:
        if (char == "'" or char == '"'):
            continue
        if (char == ';'):
            break
        if (char != ';'):
            value = value + char

    sql = "SELECT * FROM states WHERE name = '%s'" % (value)
    cursor.execute(sql)
    result = cursor.fetchall()
    for item in result:
        print(item)

    cursor.close()
    db.close()
