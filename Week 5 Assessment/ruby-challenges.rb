# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def get_words_with(array, str)
  getWords = []
  array.each { |value| getWords.push(value) if value.include?(str) }
  p getWords
end
get_words_with(beverages_array, letter_o)
get_words_with(beverages_array, letter_t)

# NOTE: the syntax on line 15 got automatically changed by prettier extension. It's kinda cool that you can write iterables and if statements like this

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum(array)
  array.sum
end

p sum nums_array1
p sum nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model, wheels = 2, current_speed = 0)
    @model = model
    @wheels = wheels
    @current_speed = current_speed
  end

  def bike_info
    "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph"
  end

  def faster(num)
    @current_speed += num
  end

  def slower(num)
    @current_speed -= num
    if @current_speed <= 0
      @current_speed = 0
      p 'You are stopped.'
    end
  end
end
diamonback = Bike.new('Diamondback')
p diamonback.bike_info

diamonback.faster(10)
p diamonback.bike_info

diamonback.slower(5)
p diamonback.bike_info

diamonback.slower(15)
p diamonback.bike_info
