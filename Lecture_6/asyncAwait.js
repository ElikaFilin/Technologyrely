 const random = (max, min) => Math.floor(Math.random() * (max - min)) + min;

function test() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      const user = data[random(10, 0)];
      console.log('My user is', user);
      return user;
    })
    .then(user => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          const post = data[random(100, 0)];
          console.log('My post is', post);
          const finalRes = {
            user,
            post
          };
          console.log('Finally', finalRes);
        });
    });

  console.log('I have to appear in a console first');
}

function asyncTest() {

		console.log('I have to appear in a console first');
		const fet = await fetch('https://jsonplaceholder.typicode.com/users');
		const json = await fet.json();
		const user = json[random(10, 0)];
		console.log('My user is', user);
		const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
		const postsjson = await posts.json();
		const post = postsjson[random(100, 0)];
		console.log('My post is', post);
		const finalRes = {
			user,
			post
		};
		console.log('Finally', finalRes);

}

test();
asyncTest();
