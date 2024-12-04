import { Router } from 'express'
import multer from "multer"
// auth controllers
import register from '../controllers/register_controller.js'
import login from '../controllers/login_controller.js'
import profile from '../controllers/profile_controller.js'

import { sendMessage, getMessages, deleteMessage } from '../controllers/contact_controller.js'
import { createTahmin, getAllTahmin, updateTahmin, deleteTahmin } from "../controllers/bet_controller.js"
import { createKupon, getAllKupon, updateKupon, deleteKupon } from "../controllers/cupon_controller.js"
import { createSlide, getAllSlide, deleteSlide, updateSlide } from '../controllers/slide_controller.js'
// middlewares
import verifyToken from '../middlewares/auth_middleware.js'
const router = Router()


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// users
router.post('/admin/register', register)
router.post('/admin/login', login)
router.get('/admin/profile', verifyToken, profile)


// contact
router.post('/admin/contact', sendMessage)
router.get('/admin/contact', getMessages)
router.delete('/admin/contact/:id', deleteMessage)

// adverse slide
router.post('/admin/slide',upload.fields([{ name: 'slideImage' }]), createSlide)
router.get('/admin/slide', getAllSlide)
router.delete('/admin/slide/:id', deleteSlide)
router.put('/admin/slide/:id', updateSlide)


// bets
router.post('/admin/bet', upload.fields([{ name: 'groupOneImage' }, { name: 'groupTwoImage' }]), createTahmin);
router.get('/admin/bet/', getAllTahmin);
router.put('admin/bet/:id', updateTahmin);
router.delete('/admin/bet/:id', deleteTahmin);
// Kupons
router.post('/admin/kupon', upload.fields([{ name: 'groupOneImage' }, { name: 'groupTwoImage' }, { name: 'groupThirtyImage' }, { name: 'groupFortyImage' }]), createKupon);
router.get('/admin/kupon/', getAllKupon);
router.put('admin/kupon/:id', updateKupon);
router.delete('/admin/kupon/:id', deleteKupon);

export default router
