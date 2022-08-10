## Solution

The first thing that came in my mind after reading the challenge was graphs. At first, transforming the 2d array into a graph and using known algorithms to find the correct path sounds the best solution.

But the thing is, what is the point in using known alogorithms, right? So I've changed my mind and instead wanted to try solving this challenge from scratch.

It was obvious that the solution should be using Dynamic Programming. At least to make sure the time is not something absurd. With that in mind, all I had to do is to implement the recursive function to calculate the result.

Basically my idea was, we can think each path search as a tree. Each time that we choose a path to calculate the sum, it's a subtree of that index. So let's say that if we start at index (0, 0), the next index that I need to calculate the sum should be (0, 1), and after I calculate that, I need to go down one row and start the process to calculate the (1, 0) tree, but it turns that one of the subtrees of (1, 0) is also (0, 1), and at this point I already know the answer. So each time I calculate a subtree result, I store in a map like object to make sure I never calculate the same path more than once.

And that's it!

## Algorithm

The code is pretty simple, my `sumWeightedPath` function accepts 3 arguments, the first one is the number of lines, the second one is the number of columns and the third one is the matrix itself.

After that, I declare my variable that will hold the already computed values from the subtrees and also declare the final result variable;

Then, in the `f` function is where the magic happens, basically it acceps two arguments, the indexes of the starting point to calculate the sum of the sub paths. Inside this function, the first thing that I do is to check if I already have that specific index solved, if so, return it, if not, continue. Then I check for the end of the matrix, basically when we reached the last column. In the case we are still calculating the path, return the max value between the paths from top-right, right and bottom-right, store that result in the variable and return the sum of that path plus the value of that cell in the matrix.

The last thing we need to do is to iterate over each row to start the path calculations and check which one has the highest value.

## Implementation

In this project I'm using TypeScript is the language. In order to run, you have to install the latest NodeJS along with NPM.

Make sure you have the dependencies installed by running the command `npm install` inside this project's folder.

And to run the algorithm, I've setup some test cases using the `Jest` test framework, so the only thing you need to do to run the test cases is run the command `npm test`.

## Complexity

The time complexity of my algorithm is O(n(m-1)) and the space complexity is O(nm).