let quiz1 = {
    name: "fast foods",
    id: 1,
    image: "cherryblossom.png",
    imgs: ["burger.jpg", "egg.jpg", "fries.jpg", "pancake.jpeg", "salad.jpg", "wings.jpg"],
    answer: ['burger', 'egg', 'fries', 'pancake', 'salad', 'wings'],
    choice: [
        ['sandwich', 'croissiant', 'noodle', 'burger'],
        ['porridge', 'oatmeal', 'egg', 'paste'],
        ['fries', 'potato', 'crayon', 'pasta'],
        ['pan', 'cake', 'pancake', 'cakes'],
        ['vetegables', 'salad', 'leaves', 'plant'],
        ['win', 'wings', 'wing', 'chicken']
    ]
};

let quiz2 = {
    name: "fruits",
    id: 2,
    image: "daffodil.png",
    imgs: ["apple.jpeg", "bananas.jpg", "durian.jpg", "kiwifruit.png", "pomegranate.jpeg", "watermelon.jpg"],
    answer: ['apple', 'bananas', 'durian', 'kiwifruit', 'pomegranate', 'watermelon'],
    choice: [
        ['apple', 'app', 'red balls', 'Apple'],
        ['banana', 'bananas', 'yellow sausage', 'banana skin'],
        ['hedgehog', 'durian', 'weapon', 'stinky'],
        ['kiwi', 'wiki', 'kiwifruit', 'wikifruit'],
        ['coco Plum', 'mammee apple', 'persimmon', 'pomegranate'],
        ['waterymelon', 'waterproofmelon', 'watermelon', 'waterlessmelon']
    ]
};

let quiz3 = {
    name: "tableware",
    id: 3,
    image: "daisy.jpg",
    imgs: ["bowl.jpg", "chopsticks.jpeg", "fork.jpg", "plate.jpg", "spoon.jpg", "spork.jpeg"],
    answer: ['bowl', 'chopsticks', 'fork', 'plate', 'spoon', 'spork'],
    choice: [
        ['bowl', 'bowling', 'bowler', 'bow'],
        ['woodsticks', 'bamboosticks', 'chopsticks', 'stainlesssticks'],
        ['oyster fork', 'fork', 'cocktail fork', 'breakfast fork'],
        ['china plate', 'dinner plate', 'beautiful plate', 'plate'],
        ['spoon', 'dessert spoon', 'teaspoon', 'soup spoon'],
        ['spoork', 'spfork', 'spork', 'sfork']
    ]
};

let quiz4 = {
    name: "vegetables",
    id: 4,
    image: "lily.jpg",
    imgs: ["avocado.jpg", "broccoli.jpeg", "carrot.jpg", "cucumber.jpg", "garlic.jpg", "tomato.jpeg"],
    answer: ['avocado', 'broccoli', 'carrot', 'cucumber', 'garlic', 'tomato'],
    choice: [
        ['guacamole', 'avocado', 'cherimoya', 'green pear'],
        ['kalettes', 'broccoflower', 'romanesco', 'broccoli'],
        ['carrot', 'red parsnips', 'turnip', 'beetroot'],
        ['sponge gourd', 'zucchini', 'cucumber', 'wax gourd'],
        ['green garlic', 'garlic', 'garcinia mangostana', 'garlic fruit'],
        ['better boy', 'brandywine', 'cherry tomato', 'tomato']
    ]
};

let quizzes = [quiz1, quiz2, quiz3, quiz4];
let scores = [];

module.exports.quizzes = quizzes;
module.exports.scores = scores;