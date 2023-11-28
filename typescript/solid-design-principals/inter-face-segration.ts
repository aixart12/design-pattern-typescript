//

// interface Machine {
//   print(document: Document): void;
//   scan(document: Document): void;
//   fax(document: Document): void;
// }

interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface Fax {
  fax(document: Document): void;
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log("The machine is printing");
  }
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(document: Document): void {
    console.log("The machine is printing");
  }
  scan(document: Document): void {
    console.log("The Machine is scanning");
  }

  fax(document: Document): void {
    console.log("The machine is sending a fax");
  }
}

// Real Work Example

// create posts
// commenting posts
// sharing posts
// Admin - 3
// Regular -2

interface Post {
  title: string;
  content: string;
}
interface Comment {
  title: string;
  content: string;
}

interface PostCreator {
  createPost(post: Post): void;
}

interface CommentCreator {
  createComment(comment: Comment): void;
}

interface PostSharer {
  sharePosts(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
  createPost(post: Post): void {
    console.log("Admin is creating Post");
  }
  createComment(comment: Comment): void {
    console.log("Admin is creating a comment");
  }
  sharePosts(post: Post): void {
    console.log("Admin is sharing a Post");
  }
}

class Regular implements CommentCreator, PostSharer {
  createComment(comment: Comment): void {
    console.log("Regular User is creating a comment");
  }
  sharePosts(post: Post): void {
    console.log("Regular User  is sharing a Post");
  }
}

/**
 * Advantages
 * Improve maintainability
 * Reduce impact of changes
 *
 *
 * */
