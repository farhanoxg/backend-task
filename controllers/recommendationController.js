const User = require('../models/User');
const JobPosting = require('../models/JobPosting');

const getRecommendations = async (req, res) => {
    try {
      const { name ,skills, experience_level, preferences } = req.body;

      if (!name || !skills || !experience_level || !preferences) {
        return res.status(400).json({ msg: "Invalid input: All fields (name, skills, experience_level, preferences) are required."});
      }

      const { desired_roles, locations, job_type } = preferences;

    if (!desired_roles || !locations || !job_type) {
      return res.status(400).json({msg: "Invalid input: All preferences fields (desired_roles, locations, job_type) are required."});
    }

    const newUser = new User({
        name,
        skills,
        experience_level,
        preferences
      });
      await newUser.save();

      const jobs = await JobPosting.find({
        $and: [
          { job_title: { $in: preferences.desired_roles } },
          { experience_level: experience_level },
          { job_type: preferences.job_type },
          { location: { $in: preferences.locations } },
          { required_skills: { $in: skills } }
        ]
      });

      if(jobs.length===0){
        return res.status(404).json({msg:"no jobs found matching your profile"})
      }
  
      return res.status(200).json(jobs);

    } catch (error) {
      return res.status(500).json({ err: 'Server error' });
    }
  };
  

const addJobPosting = async (req, res) => {
    try {
      const { job_title, company, location, job_type, required_skills, experience_level } = req.body;
  
      
      const newJob = new JobPosting({
        job_title,
        company,
        location,
        job_type,
        required_skills,
        experience_level
      });
  
      const savedJob = await newJob.save();
  
     return  res.status(201).json(savedJob); 
    } catch (error) {
     return res.status(500).json({ err: 'Server error' });
    }
  };

module.exports = { getRecommendations , addJobPosting};


