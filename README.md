# news
News sub-site for I-TECH

## Creating new posts

To create new posts, navigate to the ```_posts``` folder and create a new Markdown (.md) file in the following format:

> YYYY-MM-DD-title-of-the-post.md  
> Example: 2022-01-08-hello-world.md

Then, edit the file to create your post.

## Post format

Each post must have the following Jekyll's liquid tag at the top:
```
---
layout: post
title: "Title of the Post"
date: YYYY-MM-DD
tag: "POST TAG"
---
```

For example:
```
---
layout: post
title: "Hello World"
date: 2022-01-08
tag: "EVENT"
---
```

The ```tag``` of the posts is simply just a category of the post. You can type in anything. It will be displayed next to the posts in the post list for easy identification of the type of posts. But formatting, make sure the tags are in CAPITAL LETTERS and limits the tag length only to short words like ```INFO``` or ```UPDATE```.

Below that is where your content will be. The content is to be formatted in Markdown format. Check any Markdown cheatsheet to learn the format quickly.
Additionally, you can also use HTML & CSS to format your post.

Both of these are valid:
```
# Hello World!

## Overview

This is an example post!

[This is an example link](https://example.com)

![Example Image](https://picsum.photos/200)
```

and

```
<h1>Hello World!</h1>

<h2>Overview</h2>

<p>This is an example post!</p>

<a href="https://example.com">This is an example Link</a>

<img src="https://picsum.photos/200" alt="Example Image">
```

will be rendered as:

---

# Hello World!

## Overview

This is an example post!

[This is an example link](https://example.com)

![Example Image](https://picsum.photos/200)

---

## Managing comments on a post

1. Navigate to the issues section of this repo.
2. Find the issue with the same name as the post to be managed.
3. There, you'll find the list of comments on the post. You can delete any bad/spammy/offensive comments there.
4. Additionally, if you want to disable comments on that post, simply close the issue.
