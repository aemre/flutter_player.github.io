'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "846d66d74f5576ed70204e95d3aef82e",
".git/config": "3984383f746004c62370c2fe1d68a169",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e30d2c50ee4de1ba4745efee62f3d8b6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "8326cbc4d2d669e5c3552312a918e24e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e6c698bc153d32fd589e09df72640396",
".git/logs/refs/heads/master": "e6c698bc153d32fd589e09df72640396",
".git/logs/refs/remotes/origin/master": "806bfed8205a5f67899d9d509cddeb1d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/194cee2bf8c1f94e47b84e9dbd251ba46e9cdd": "45a09951371d887f384d7dab3db55ffc",
".git/objects/0e/6c7d75e8938b053dc6db2cf69ffc381cfc3375": "67da822610f48d2d3be20a7a49f26f3a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/da357ad31a345a56f1fa53c7be4fec2fa64bff": "c46ed6f6799924e7dfed579f1c51732b",
".git/objects/1b/eedc6d0afea163168f27ed52da3ea4a1f7cdc5": "0a035d4fde6c4524ce7fc465531f028c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/32aa27437894b81e88cfd3f22e54fca6567574": "7ef3a28bc54d52b1c639de1698112d3c",
".git/objects/2f/7efbeab578c8042531ea7908ee8ffd7589fe46": "aa9408a44a7560b833dd793a6cb10ddd",
".git/objects/49/c1bfd517100d1a1e7981aa1059c4bef2fb00fa": "e8a40c7f06fd759e82a07bf5f4553728",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/9adb56a3e53a41654dc248e761941a6848999c": "938aedb5ff5462a8c6bb00bba1213271",
".git/objects/5c/98875eb2ffbac4eaebdb464bdf9d2ac1e32ffe": "7d4f66016b619a8329603991c9abd14f",
".git/objects/6f/292a535cd8fc35cf90e2f5c61aa2fb7f47818c": "d6218eb1dee23da6c6ea99b084d44a8e",
".git/objects/71/b471f6b53edf2a2efc18c560e9c2723513de6b": "6cfe3a40dfb56ed75d6cb946f61e3691",
".git/objects/73/9ef5e8c609ae4ea8f4911a2f69f36bb5b991ac": "4724a05cde9748d09e25a99b8bd3b056",
".git/objects/73/f29464f879965c275927e46f1c6ac1b7ea4840": "31d150b2d74f0c687c4bc735501103a5",
".git/objects/7b/cb74765ec224a2c6e2bc5d0ca1b70958a40efb": "2fa3121f8d09568cc297d42598c83503",
".git/objects/80/e27cbe9dd1c22198242e7e316de562513a618d": "ebb9e84792a22a4df7f67d2be808a2c0",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/001e5f83e7f9fbdba54e1ff731369245135d29": "a4f8ba84ec1c856c0c7b3c90b523fd74",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9a/c805e5dddaeae9da38e4a8e0d998bf28e62cec": "a1212139b4a4d1e3fae152d1952b5fde",
".git/objects/9f/23b5ce45392315654c39f64db45b40f063cfe1": "bd3186cbabf18af5c93d77665827deff",
".git/objects/a1/28cbb964ca99cd915f0f2970d0f2a0c106b3c5": "60143d9a8f027f30a7aa636c103fdfe3",
".git/objects/a2/71691f957ab0f1d7f2b3752809836cc70c371f": "d65f6864868771be5ee9a0b642f13467",
".git/objects/af/3bde1d337dd69cfca0531d0d0f4f9d3fe8ceea": "41af500d0d66173f7b81ab05fd423329",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c7/512c48aee8ab2d70da8195643485439897cc5b": "288325308a0bf5f7ab633dce3541fa9f",
".git/objects/cb/c17ec39ee52344bbd56106f59c87f365cccba5": "40c15e89b9a3628b6eb8e97518f758b4",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e6/ede9a44f1ee26998dc286e4d1a0a108c3c969c": "c8229a1d1cfffff278a33dbd7322b3cc",
".git/objects/ed/d44fc008a27c7bf204b58e34e78dcd1b9525a9": "605e1f6cec088269ea1640f1a731014b",
".git/objects/fc/33b2736637286fe844b90a5a401535d35a9578": "c1bcb8b9961ac6ced9d1f51626339fb6",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "320fe2976658b13c82aceceb6717321e",
".git/refs/heads/master": "5883b692b91a72a0f515dc0b825517d8",
".git/refs/remotes/origin/master": "5883b692b91a72a0f515dc0b825517d8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "1801ce10811e06f389d12f133205da05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "305634e56b391c1323db4f870117c8e7",
"/": "305634e56b391c1323db4f870117c8e7",
"main.dart.js": "d8708f0e025675e37371a973c18fdee1",
"manifest.json": "a6cffa0eba42a95df62bd26b22289533",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
