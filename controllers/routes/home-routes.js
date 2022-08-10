const router = require('express').Router();

const ShinobiProjects = require('../../models/ShinobiProjects');
const ServiceRequest = require('../../models/ServiceRequest');
router.get('/', (req, res) => {
  console.log(req.session);

  ShinobiProjects.findAll({
    attributes: ['project_name', 'project_description', 'project_code']
  }).then(shinobiProjects => { 
    const projectData = shinobiProjects.map(project => project.get({ plain: true }));
    if (req.session.loggedIn) {
      res.render('homepage', { projectData, loggedIn: true, userName:req.session.username });
    }
    res.render('homepage', {projectData});
  });
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) { 
    res.redirect('/');
    return;
  } else {
    res.render('login');
    return;
  }
});


router.get('/logout', (req, res) => {
  if(req.session.loggedIn) { 
    req.session.destroy(() => {
      res.redirect('/');
      return;
    });
  } else {
    res.redirect('/login');
    return;
  }

});

router.get('/serviceRequest', async (req, res)=>{
  if (req.session.loggedIn) {
    const serviceRequestData = await ServiceRequest.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    const serviceRequests = serviceRequestData.map(serviceRequest => serviceRequest.get({ plain: true }));
    res.render('serviceRequest', {serviceRequests, loggedIn: true, userName:req.session.username});
    return;
  }
  res.redirect('/login');
})

module.exports = router;