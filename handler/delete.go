package handler

 import (
	"net/http"
	"strconv"
	"github.com/labstack/echo"
	"../model"
)

func DeleteUser(c echo.Context) (err error) {
	db := gormConnect()
	defer db.Close()

	u := &model.User{}
	id, _ := strconv.Atoi(c.Param("id"))
	db.First(u, id)
	db.Delete(u)
	return c.NoContent(http.StatusNoContent)
}