package handler

import (
	"net/http"
	"strconv"
	"../model"
	"github.com/labstack/echo"
)

func UpdateUser(c echo.Context) (err error) {
	db := gormConnect()
	defer db.Close()

	u := &model.User{}
	id, _ := strconv.Atoi(c.Param("id"))
	db.First(u, id)

	if err := c.Bind(u); err != nil {
		return err
	}

	db.Model(u).Update("Name", u.Name)
	return c.JSON(http.StatusOK, u)
}