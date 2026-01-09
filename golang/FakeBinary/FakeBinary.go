//link https://www.codewars.com/kata/57eae65a4321032ce000002d

package main

import "fmt"

func FakeBin(x string) string {
	result := ""
	for i := 0; i < len(x); i++ {
		num := x[i] - '0'
		if num < 5 {
			result += "0"
		} else {
			result += "1"
		}
	}
	return result
}

func main() {
	fmt.Println(FakeBin("4545"))       // returns "0101"
	fmt.Println(FakeBin("1234567890")) // returns "0000111110"
}
