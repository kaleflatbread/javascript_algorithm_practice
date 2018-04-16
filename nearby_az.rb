# Write a method that takes a string in and returns true if the letter
# "z" appears within three letters **after** an "a".
# Difficulty: medium.

def nearby_az(string)
  string = string.downcase

  if !string.include? "z"
    return false
  end

  if !string.include? "a"
    return false
  end

  if string.index('a') - string.index('z') >= -3 && string.index('a') - string.index('z') <= 0
    true
  else
    false
  end
end

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts("\nTests for #nearby_az")
puts("===============================================")
    puts('nearby_az("baz") == true: ' + (nearby_az('baz') == true).to_s)
    puts('nearby_az("abz") == true: ' + (nearby_az('abz') == true).to_s)
    puts('nearby_az("abcz") == true: ' + (nearby_az('abcz') == true).to_s)
    puts('nearby_az("a") == false: ' + (nearby_az('a') == false).to_s)
    puts('nearby_az("z") == false: ' + (nearby_az('z') == false).to_s)
    puts('nearby_az("za") == false: ' + (nearby_az('za') == false).to_s)
    puts('nearby_az("BAZ") == true: ' + (nearby_az('BAZ') == true).to_s)
    puts('nearby_az("ABCz") == true: ' + (nearby_az('ABCz') == true).to_s)
    puts('nearby_az("ABCdz") == true: ' + (nearby_az('ABCdz') == false).to_s)
puts("===============================================")
