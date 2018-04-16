# Write a method that takes a string and returns true if it is a
# palindrome. A palindrome is a string that is the same whether written
# backward or forward. Assume that there are no spaces; only lowercase
# letters will be given.
#
# Difficulty: easy.

def palindrome?(string)
  return false if string.length == 0
  # This is better if we can call reverse... but I assume we can't
  # reversed = string.reverse
  # if string == reversed
  #   true
  # else
  #   false
  # end

  string_idx = 0
  while string_idx < string.length
    if string[string_idx] != string[(string.length-1)-string_idx]
      return false
    end
    string_idx += 1
  end
  return true
  #
end

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts("\nTests for #palindrome?")
puts("===============================================")
    puts('palindrome?("abc") == false: ' + (palindrome?('abc') == false).to_s)
    puts('palindrome?("abcba") == true: ' + (palindrome?('abcba') == true).to_s)
    puts('palindrome?("abba") == true: ' + (palindrome?('abba') == true).to_s)
    puts('palindrome?("z") == true: ' + (palindrome?('z') == true).to_s)
    puts('palindrome?("") == false: ' + (palindrome?('') == false).to_s)
puts("===============================================")
