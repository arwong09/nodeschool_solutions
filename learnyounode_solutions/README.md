#LearnYouNode Solutions

##JUGGLING ASYNC Solution
My I came up with my solution to juggling async without using any libraries.

I didn't want to use any libraries when solving this because I think it results in a much better understanding of the concept they're trying to teach.  It also made me flex my JavaScript muscles :)  I figure if I can do it without the library, then I'll have no problem picking up the library later, which is definitely more convenient to use when actually building an application.

The idea I used to solve this problem is to create 3 different closures, one for each different url.  This allowed me to scope the index of the url i.e. 0, 1, 2 to each call, so when it finally finished receiving all its data, it simply populate the results array at the correct index.

I initially wrote out 3 separate closures, which meant defining processCall 3 different times, but I realized by using apply() I was able to remove that, and create 3 separate scopes automatically for each call to the function.

Defining printResults as a separate function is just a code style thing that I think really helps with code readability.  It adds two extra lines of code, but it's worth it to add a few lines for improved readability.
