class Github {
    constructor() {
        this.client_id = '318dd30e5982b70b501b';
        this.client_secret = '4339b22503e2b69f1c9d9d42dcf74c2d16b67c6c';
    }

 async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}

