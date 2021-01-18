var express = require('express');
var router = express.Router();
const cors = require('cors');

/* GET users listing. */
router.get('/', cors(), function(req, res, next) {
	console.log('here');
  res.json([
	  { id: 1,
			title: 'The Shadows Between Us',
			author: 'Tricia Levenseller',
			img: 'https://m.media-amazon.com/images/I/51NKQD10W2L.jpg',
			link: 'https://www.amazon.com/Shadows-Between-Us-Tricia-Levenseller-ebook/dp/B07P9LQBM1/ref=sr_1_2?crid=346A4F0NYTX6H&dchild=1&keywords=the+shadows+between+us&qid=1606768883&s=books&sprefix=The+Shadows%2Cstripbooks%2C206&sr=1-2',
			description: 'Alessandra is tired of being overlooked, but she has a plan to gain power: 1) Woo the Shadow King. 2) Marry him. 3) Kill him and take his kingdom for herself. No one knows the extent of the freshly crowned Shadow King’s power. Some say he can command the shadows that swirl around him to do his bidding. Others say they speak to him, whispering the thoughts of his enemies. Regardless, Alessandra knows what she deserves, and she’s going to do everything within her power to get it.But Alessandra’s not the only one trying to kill the king. As attempts on his life are made, she finds herself trying to keep him alive long enough for him to make her his queen—all while struggling not to lose her heart. After all, who better for a Shadow King than a cunning, villainous queen?',
			category: 'Fantasy'
		},
		{
			id: 2,
			title: 'The Invisible Life of Addie LaRue',
			author: 'V. E. Schwab',
			img: 'https://m.media-amazon.com/images/I/51FVPBt51ZL.jpg',
			link: 'https://www.amazon.com/Invisible-Life-Addie-LaRue-ebook/dp/B084357H23/ref=sr_1_1?crid=1F2QKE4NO32SV&dchild=1&keywords=the+invisible+life+of+addie+larue+by+v.e.+schwab&qid=1605208117&sprefix=the+in%2Caps%2C250&sr=8-1',
			description: 'France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever—and is cursed to be forgotten by everyone she meets. Thus begins the extraordinary life of Addie LaRue, and a dazzling adventure that will play out across centuries and continents, across history and art, as a young woman learns how far she will go to leave her mark on the world. But everything changes when, after nearly 300 years, Addie stumbles across a young man in a hidden bookstore and he remembers her name.',
			category: 'Paranormal'
		},
		{
			id: 3,
			title: 'The Hating Game: A Novel',
			author: 'Sally Thorne',
			img: 'https://m.media-amazon.com/images/I/51kFZTPkczL.jpg',
			link: 'https://www.amazon.com/Hating-Game-Novel-Sally-Thorne-ebook/dp/B01825C598/ref=sr_1_2?crid=YI86XHUH4QB4&dchild=1&keywords=the+hating+game&qid=1606766342&s=digital-text&sprefix=The+Hating%2Caps%2C205&sr=1-2',
			description: 'Lucy Hutton and Joshua Templeman hate each other. Not dislike. Not begrudgingly tolerate. Hate. And they have no problem displaying their feelings through a series of ritualistic passive aggressive maneuvers as they sit across from each other, executive assistants to co-CEOs of a publishing company. Lucy can’t understand Joshua’s joyless, uptight, meticulous approach to his job. Joshua is clearly baffled by Lucy’s overly bright clothes, quirkiness, and Pollyanna attitude. Now up for the same promotion, their battle of wills has come to a head and Lucy refuses to back down when their latest game could cost her her dream job…But the tension between Lucy and Joshua has also reached its boiling point, and Lucy is discovering that maybe she doesn’t hate Joshua. And maybe, he doesn’t hate her either. Or maybe this is just another game.',
			category: 'Contemporary'
		},
		{
			id: 4,
			title: 'Bridgerton: The Duke and I',
			author: 'Julia Quinn',
			img: 'https://m.media-amazon.com/images/I/510GRvgpNRL.jpg',
			link: 'https://www.amazon.com/Duke-2nd-Epilogue-Bridgertons-Book-ebook/dp/B00UG8RP8Q/ref=sr_1_2?dchild=1&keywords=julia+quinn&qid=1606766040&sr=8-2',
			description: 'By all accounts, Simon Basset is on the verge of proposing to his best friend\'s sister—the lovely and almost-on-the-shelf—Daphne Bridgerton. But the two of them know the truth—it\'s all an elaborate ruse to keep Simon free from marriage-minded society mothers. And as for Daphne, surely she will attract some worthy suitors now that it seems a duke has declared her desirable. But as Daphne waltzes across ballroom after ballroom with Simon, it\'s hard to remember that their courtship is a sham. Maybe it\'s his devilish smile, certainly it\'s the way his eyes seem to burn every time he looks at her . . . but somehow Daphne is falling for the dashing duke . . . for real! And now she must do the impossible and convince the handsome rogue that their clever little scheme deserves a slight alteration, and that nothing makes quite as much sense as falling in love.',
			category: 'Historical'
		},
		{
			id: 5,
			title: 'Dead Until Dark (Sookie Stackhouse Book 1)',
			author: 'Charlaine Harris',
			img: 'https://m.media-amazon.com/images/I/51bMsa8YpuL.jpg',
			link: 'https://www.amazon.com/Dead-Until-Dark-Sookie-Stackhouse-ebook/dp/B000OCXHRW/ref=sr_1_2?dchild=1&keywords=dead+until+dark&qid=1606766852&s=digital-text&sr=1-2',
			description: 'Sookie Stackhouse is just a small-time cocktail waitress in small-town Bon Temps, Louisiana. She\'s quiet, doesn\'t get out much, and tends to mind her own business—except when it comes to her “disability.” Sookie can read minds. And that doesn’t make her too dateable. Then along comes Bill Compton. He’s tall, dark, handsome—and Sookie can’t hear a word he’s thinking. He’s exactly the type of guy she’s been waiting for all her life...But Bill has a disability of his own: he’s a vampire with a bad reputation. And when a string of murders hits Bon Temps—along with a gang of truly nasty bloodsuckers looking for Bill—Sookie starts to wonder if having a vampire for a boyfriend is such a bright idea.',
			category: 'Paranormal'
		},
		{
			id: 6,
			title: 'Red, White & Royal Blue',
			author: 'Casey McQuiston',
			img: 'https://m.media-amazon.com/images/I/41hv25yqOCL.jpg',
			link: 'https://www.amazon.com/Red-White-Royal-Blue-Novel-ebook/dp/B07J4LPZRN/ref=sr_1_2?crid=4Y09ENHAYOHW&dchild=1&keywords=red+white+and+royal+blue&qid=1606767133&s=books&sprefix=red+white%2Cinstant-video%2C208&sr=1-2',
			description: 'What happens when America\'s First Son falls in love with the Prince of Wales? When his mother became President, Alex Claremont-Diaz was promptly cast as the American equivalent of a young royal. Handsome, charismatic, genius—his image is pure millennial-marketing gold for the White House. There\'s only one problem: Alex has a beef with the actual prince, Henry, across the pond. And when the tabloids get hold of a photo involving an Alex-Henry altercation, U.S./British relations take a turn for the worse. Heads of family, state, and other handlers devise a plan for damage control: staging a truce between the two rivals. What at first begins as a fake, Instragramable friendship grows deeper, and more dangerous, than either Alex or Henry could have imagined. Soon Alex finds himself hurtling into a secret romance with a surprisingly unstuffy Henry that could derail the campaign and upend two nations and begs the question: Can love save the world after all? Where do we find the courage, and the power, to be the people we are meant to be? And how can we learn to let our true colors shine through? Casey McQuiston\'s Red, White & Royal Blue proves: true love isn\'t always diplomatic.',
			category: 'LGBTQ'
		},
		{
			id: 7,
			title: 'A Discovery of Witches',
			author: 'Deborah Harkness',
			img: 'https://m.media-amazon.com/images/I/51AsSA9sY7L.jpg',
			link: 'https://www.amazon.com/Discovery-Witches-Novel-Souls-Trilogy-ebook/dp/B004DI7HZ6/ref=sr_1_2?dchild=1&keywords=a+discovery+of+witches&qid=1606767776&s=books&sr=1-2',
			description: 'In this tale of passion and obsession, Diana Bishop, a young scholar and a descendant of witches, discovers a long-lost and enchanted alchemical manuscript, Ashmole 782, deep in Oxford\'s Bodleian Library. Its reappearance summons a fantastical underworld, which she navigates with her leading man, vampire geneticist Matthew Clairmont.',
			category: 'Paranormal'
		},
		{
			id: 8,
			title: 'Neanderthal Seeks Human',
			author: 'Penny Reid',
			img: 'https://m.media-amazon.com/images/I/418o1CfktQL.jpg',
			link: 'https://www.amazon.com/Neanderthal-Seeks-Human-Knitting-City-ebook/dp/B00BUWA58E/ref=sr_1_1?crid=3QR89XU9DTLD1&dchild=1&keywords=neanderthal+seeks+human+by+penny+reid&qid=1606768082&s=books&sprefix=Neaderthal+seeks+human%2Cstripbooks%2C198&sr=1-1',
			description: 'There are three things you need to know about Janie Morris: 1) She is incapable of engaging in a conversation without volunteering TMTI (Too Much Trivial Information), especially when she is unnerved, 2) No one unnerves her more than Quinn Sullivan, and 3) She doesn\'t know how to knit. After losing her boyfriend, apartment, and job in the same day, Janie Morris can\'t help wondering what new torment fate has in store. To her utter mortification, Quinn Sullivan—aka Sir McHotpants—witnesses it all then keeps turning up like a pair of shoes you lust after but can\'t afford. The last thing she expects is for Quinn to make her an offer she can\'t refuse.',
			category: 'Contemporary'
		},
		{
			id: 9,
			title: 'Love in the Afternoon',
			author: 'Lisa Kleypas',
			img: 'https://m.media-amazon.com/images/I/51NU3U2ysHL.jpg',
			link: 'https://www.amazon.com/Love-Afternoon-Hathaways-Book-5-ebook/dp/B003Q6DGC4/ref=sr_1_33?dchild=1&keywords=Lisa+Kleypas&qid=1606768285&s=books&sr=1-33',
			description: 'As a lover of animals and nature, Beatrix Hathaway has always been more comfortable outdoors than in the ballroom. Even though she participated in the London season in the past, the classic beauty and free-spirited Beatrix has never been swept away or seriously courted…and she has resigned herself to the fate of never finding love. Has the time come for the most unconventional of the Hathaway sisters to settle for an ordinary man—just to avoid spinsterhood? Captain Christopher Phelan is a handsome, daring soldier who plans to marry Beatrix\'s friend, the vivacious flirt Prudence Mercer, when he returns from fighting abroad. But, as he explains in his letters to Pru, life on the battlefield has darkened his soul—and it\'s becoming clear that Christopher won\'t come back as the same man. When Beatrix learns of Pru\'s disappointment, she decides to help by concocting Pru\'s letters to Christopher for her. Soon the correspondence between Beatrix and Christopher develops into something fulfilling and deep…and when Christopher comes home, he\'s determined to claim the woman he loves. What began as Beatrix\'s innocent deception has resulted in the agony of unfulfilled love—and a passion that can\'t be denied…',
			category: 'Historical'
		}
  ]); 
});

module.exports = router;
