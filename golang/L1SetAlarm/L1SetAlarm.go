//link https://www.codewars.com/kata/568dcc3c7f12767a62000038

package main

import "fmt"

func SetAlarm(employed, vacation bool) bool {
	return employed && !vacation
}

func main() {
	fmt.Println(SetAlarm(true, true))   // false
	fmt.Println(SetAlarm(true, false))  // true
	fmt.Println(SetAlarm(false, true))  // false
	fmt.Println(SetAlarm(false, false)) // false
}
