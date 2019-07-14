package handler

 import (
	"log"
	"net/http"
	"strconv"
	"github.com/labstack/echo"
	"../model"
)

func DeleteUser(c echo.Context) (err error) {
	log.Println(model.Users)
	id, _ := strconv.Atoi(c.Param("id"))
	delete(model.Users, id)
	log.Println(model.Users)
	return c.NoContent(http.StatusNoContent)
}