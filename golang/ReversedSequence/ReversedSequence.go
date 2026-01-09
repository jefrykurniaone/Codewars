//link https://www.codewars.com/kata/5a00e05cc374cb34d100000d

package main

import "fmt"

func ReverseSeq(n int) []int {
	var result []int
	for i := n; i > 0; i-- {
		result = append(result, i)
	}
	return result
}

func main() {
	fmt.Println(ReverseSeq(5)) // returns [5, 4, 3, 2, 1]
}
