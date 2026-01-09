//link https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

package main

import (
	"fmt"
	"sort"
	"strings"
)

func TwoSort(arr []string) string {
	sort.Strings(arr)

	var builder strings.Builder
	for i, char := range arr[0] {
		if i > 0 {
			builder.WriteString("***")
		}
		builder.WriteRune(char)
	}

	return builder.String()
}

func main() {
	fmt.Println(TwoSort([]string{"bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"}))                         // returns "b***i***t***c***o***i***n"
	fmt.Println(TwoSort([]string{"turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"})) // returns "a***r***e"
}
