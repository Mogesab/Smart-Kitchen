const header=`<header class="site-header"><div class="container nav"><a class="brand" href="index.html"><span>&#10022;</span> SMART<br>KITCHEN</a><button class="menu" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">&#9776;</button><nav id="nav-links"><a href="index.html#products">Gadgets</a><a href="products.html">All 30 products</a><a href="about.html">About</a><a href="disclosure.html">Disclosure</a><a class="nav-cta" href="index.html#products">Make cooking easier &rarr;</a></nav></div></header>`;
const footer=`<footer><div class="container footer-top"><a class="brand" href="index.html"><span>&#10022;</span> SMART<br>KITCHEN</a><p>Simple kitchen ideas for busy moms and happier everyday meals.</p><div><a href="index.html#products">Smart gadgets</a><a href="products.html">All products</a><a href="about.html">About</a><a href="disclosure.html">Affiliate disclosure</a><a href="privacy.html">Privacy</a></div></div><div class="container footer-bottom"><p>&copy; <span data-year></span> Smart Kitchen. All rights reserved.</p><p>As an Amazon Associate I earn from qualifying purchases.</p></div></footer>`;
document.querySelectorAll('[data-site-header]').forEach(el=>el.innerHTML=header);document.querySelectorAll('[data-site-footer]').forEach(el=>el.innerHTML=footer);document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const menu=document.querySelector('.menu');if(menu)menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));document.querySelector('.site-header nav').classList.toggle('open',!open)});

const categories=[
 {id:'prep',title:'Prep made easy',note:'For quicker chopping, measuring and everyday food preparation.',items:[
  ['Vegetable chopper','A handy choice for quickly chopping onions, peppers and other everyday vegetables.','vegetable chopper'],
  ['Electric mini food chopper','Useful for small batches of herbs, nuts, garlic or sauces without pulling out a large appliance.','electric mini food chopper'],
  ['Adjustable measuring spoon set','Combines several common spoon sizes in one compact tool, helping reduce drawer clutter.','adjustable measuring spoons'],
  ['Digital kitchen scale','Makes portioning and baking measurements clearer when recipes use weight.','digital kitchen scale'],
  ['Salad spinner','Helps rinse and dry greens so they are ready for lunches and quick side dishes.','salad spinner'],
  ['Garlic press','A simple shortcut for adding fresh garlic to weeknight meals.','garlic press'] ]},
 {id:'cook',title:'Cook smarter',note:'For reliable meals with less standing, stirring and checking.',items:[
  ['Programmable slow cooker','A useful option for starting dinner earlier and returning to a warm meal.','programmable slow cooker'],
  ['Digital meat thermometer','Helps you check food temperature quickly; follow food-safety guidance for your meal.','digital meat thermometer'],
  ['Electric kettle with temperature control','Lets you heat water for tea, coffee or cooking at a temperature that fits the task.','electric kettle temperature control'],
  ['Immersion blender','Useful for blending soups, sauces and smoothies directly in a tall container.','immersion blender'],
  ['Silicone air fryer liners','Reusable liners can help make air-fryer basket clean-up simpler; check compatibility first.','silicone air fryer liners'],
  ['Clip-on pot strainer','Clips to many pots so you can drain pasta or vegetables without using a separate colander.','clip on pot strainer'] ]},
 {id:'store',title:'Store & organise',note:'For a fridge, pantry and lunch routine that is easier to see and use.',items:[
  ['Airtight food storage containers','Clear containers can make dry-food storage easier to see and organise.','airtight food storage containers'],
  ['Fridge organiser bins','Useful for grouping snacks, lunch items or ingredients by purpose.','refrigerator organizer bins'],
  ['Vacuum sealer machine','May help with batch cooking and freezer storage; compare bag availability and use instructions.','vacuum sealer machine'],
  ['Magnetic spice rack','Uses vertical refrigerator space to keep frequently used seasonings close by.','magnetic spice rack'],
  ['Reusable silicone food bags','A reusable option for snacks, leftovers and simple food storage.','reusable silicone food storage bags'],
  ['Date-label dispenser','Makes it easier to mark leftovers and prepared foods before they disappear into the fridge.','food storage date labels dispenser'] ]},
 {id:'clean',title:'Clean-up helpers',note:'For a tidier worktop and a less tiring end to meal time.',items:[
  ['Dish drying mat','Creates an absorbent place for hand-washed dishes without taking over the counter.','dish drying mat'],
  ['Soap dispensing dish brush','Keeps dish soap and scrubbing together for quick washing at the sink.','soap dispensing dish brush'],
  ['Over-the-sink colander','Lets you rinse produce while keeping precious counter space free.','over sink colander'],
  ['Countertop compost bin','A compact option for collecting suitable food scraps; choose a size that suits your routine.','countertop compost bin'],
  ['Silicone sink splash guard','Designed to help catch water near the faucet and keep the counter drier.','silicone sink splash guard'],
  ['Cordless handheld vacuum','Useful for quick crumbs around the kitchen table, drawers and car seats.','cordless handheld vacuum'] ]},
 {id:'family',title:'Family meal helpers',note:'For packed lunches, snacks and shared meals that run a little more smoothly.',items:[
  ['Bento lunch box','Separate compartments can make it easier to pack a variety of lunch items.','bento lunch box kids'],
  ['Insulated food jar','Useful for sending warm meals or chilled foods; compare size and care directions.','insulated food jar'],
  ['Reusable snack containers','Small containers help portion snacks for home, school or trips out.','reusable snack containers'],
  ['Waffle maker','A versatile appliance for simple breakfasts and freezer-friendly batches.','waffle maker'],
  ['Breakfast sandwich maker','Helps put together a hot breakfast sandwich in one compact appliance.','breakfast sandwich maker'],
  ['Family recipe binder','A simple home for printed recipes, meal ideas and notes that everyone can use.','family recipe binder'] ]}
];
const url=query=>`https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=matechreviews-20`;
const catalogue=categories.map(category=>`<section id="${category.id}" class="catalogue-group"><div class="catalogue-group-head"><h2>${category.title}</h2><p>${category.note}</p></div><div class="gadget-grid">${category.items.map(([name,description,query])=>`<article class="gadget-card"><div class="gadget-image" aria-hidden="true"></div><div class="gadget-content"><h3>${name}</h3><p>${description}</p><a class="button" target="_blank" rel="sponsored noopener" href="${url(query)}">Compare on Amazon</a></div></article>`).join('')}</div></section>`).join('');
document.querySelectorAll('[data-product-catalogue]').forEach(el=>el.innerHTML=catalogue);
const suppliedImageFolder='assets/';
const suppliedImageName=name=>name==='Vegetable chopper'?'1a9dcc60-ad3f-4e3f-b1e2-7b84141bb505.jpg':`${name}.jpg`;
document.querySelectorAll('.gadget-card').forEach(card=>{const name=card.querySelector('h3')?.textContent;const image=card.querySelector('.gadget-image');if(name&&image)image.style.backgroundImage=`url("${suppliedImageFolder}${encodeURIComponent(suppliedImageName(name))}")`;});
if(document.querySelector('.gadget-card')){const imageStyles=document.createElement('link');imageStyles.rel='stylesheet';imageStyles.href='assets/product-images.css';document.head.append(imageStyles);}