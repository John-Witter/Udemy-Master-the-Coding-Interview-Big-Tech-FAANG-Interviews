# Twitter Exercise
</br>
</br>

### Suppose your boss asks you to build a feature that allows anybody to click a button next to their name and retreive their most recent tweet and their oldest tweet (their 1st and last tweets). Do this and find the Big O.
</br>

* Find 1st, Find Nth (last item)

```javascript    
    const array = ['hi', 'my name is john', 'i like stuff'] // array of tweets
    array[0] // oldest tweet --> O(1)
    array[array.length - 1] // newest tweet --> O(1)
```

### Now your boss wants you to compare the dates of tweets. Each tweet array is now an array of objects which contain the tweet and the date the tweet was made. Compare each tweet with all the other tweets and compare their dates. Do this and find the Big O.

```javascript    
    const array = [{
        tweet: 'hi', 
        date: 2012
        }, {
        tweet: 'my name is john',
        date: 2014
        }, {
        tweet:'i like stuff',
        date: 2018
        }]
    // O(n2)
******** I Don't really know what we're doing on this one
******** This all came from the video
```