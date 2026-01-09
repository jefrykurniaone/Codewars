//link https://www.codewars.com/kata/55cbd4ba903825f7970000f5

package main

import "fmt"

func GetGrade(a, b, c int) rune {
	avg := (a + b + c) / 3

	if avg >= 90 {
		return 'A'
	} else if avg >= 80 {
		return 'B'
	} else if avg >= 70 {
		return 'C'
	} else if avg >= 60 {
		return 'D'
	}
	return 'F'
}

func main() {
	fmt.Println(string(GetGrade(95, 90, 93))) // A
	fmt.Println(string(GetGrade(80, 85, 84))) // B
	fmt.Println(string(GetGrade(70, 70, 70))) // C
	fmt.Println(string(GetGrade(60, 60, 60))) // D
	fmt.Println(string(GetGrade(50, 50, 50))) // F
}
