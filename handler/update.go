package handler

import (
	"net/http"
	"strconv"
	"github.com/labstack/echo"
		"../model"
)

func UpdateUser(c echo.Context) (err error) {
	u := new(model.User)
	if err := c.Bind(u); err != nil {
			return err
	}
	id, _ := strconv.Atoi(c.Param("id"))
	model.Users[id].Name = u.Name
	return c.JSON(http.StatusOK, model.Users[id])
}