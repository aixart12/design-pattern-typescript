// Class should have only one responsibility
class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost() {
    // Implementation
  }

  updatePost() {
    // Implementation
  }
}

class BlogPostDisplay {
  title: string;
  content: string;

  constructor(public blogPost: BlogPost) {}
  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}

// Advantages
/**
 * 1 . Easier Maintenance
 * 2 . Improved Understandability
 * 3 . Easer Tasting
 * 4 . Reduced Coupling
 * 5 . Increase Reusability
 */
