const { ServiceRequest } = require('../models');

const serviceRequestData = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    description: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    description: 'https://nasa.gov/donec.json',
    user_id: 1
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    description: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    description: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    description: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 2
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    description: 'https://stanford.edu/consequat.png',
    user_id: 2
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    description: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    description: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 1
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    description: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 2
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 4
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    description: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 2
  },
  {
    title: 'Donec dapibus.',
    description: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 4
  },
  {
    title: 'Nulla tellus.',
    description: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    description: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    description: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 1
  },
  {
    title: 'In hac habitasse platea dictumst.',
    description: 'http://wikia.com/turpis/eget.jpg',
    user_id: 2
  },
  {
    title: 'Etiam justo.',
    description: 'https://shareasale.com/quis.json',
    user_id: 1
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    description: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 3
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    description: 'https://java.com/at/nibh/in.png',
    user_id: 2
  }
];

const seedServiceRequest = () => ServiceRequest.bulkCreate(serviceRequestData);
seedServiceRequest();
module.exports = seedServiceRequest;
