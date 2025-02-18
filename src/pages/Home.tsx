

import { Container, Grid, Typography, Box, Button } from "@mui/material";



import myImage from "../assets/welcomeimg.png"; // Assure-toi du chemin correct
import img1 from "../assets/img2.png";
import img2 from "../assets/img3.png";
import img3 from "../assets/img4.png";

export default function Home() {
  
  return (
    <>
        <LandingPage></LandingPage>
        <PaymentServices></PaymentServices>
    </>
  )
}




const LandingPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Colonne gauche - Description */}
        <Grid item xs={12} md={6} >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "var(--primary-color)" }}>
          Nos Services de Paiement
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#7F8C8D" }}>
          Nous offrons une plateforme sécurisée et fiable pour effectuer vos paiements en ligne. Notre système de paiement est conçu pour offrir une expérience fluide, rapide et sécurisée pour tous vos achats. Découvrez la simplicité de gérer vos transactions en quelques clics.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "var(--text-secondary)" }}>
          Profitez de:
        </Typography>
        <ul >
          <li style={{ color: "#16A085" }}>Transactions sécurisées</li>
          <li style={{ color: "#16A085" }}>Plateforme facile à utiliser</li>
          <li style={{ color: "#16A085" }}>Support client disponible 24/7</li>
        </ul>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: "var(--primary-color)", color: "white", '&:hover': { opacity:"0.7" }, mt: 2 }}
        >
          En savoir plus
        </Button>
      </Grid>

        {/* Colonne droite - Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={myImage} // Remplace par ton image d'illustration
              alt="Illustration de paiement"
              style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};




import {  Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LockIcon from '@mui/icons-material/Lock';

const PaymentServices = () => {
  return (
    <Grid container spacing={4} sx={{ p: 4, justifyContent: 'center' }}>
      {/* Service 1 */}
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3, borderRadius: 2 }}>
          <CardActionArea>
          <CardMedia
              component="img"
              height="100"
              image={img3}
              alt="Transactions Rapides"
              sx={{height:"200px",width:"auto"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Paiements Sécurisés
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Effectuez vos paiements en ligne en toute sécurité grâce à notre technologie de cryptage avancée.
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            startIcon={<LockIcon />}
            variant="contained"
            sx={{ width:"90%", margin:"5%", backgroundColor: '#E67E22', '&:hover': { backgroundColor: '#D35400' } }}
          >
            Sécuriser mon paiement
          </Button>
        </Card>
      </Grid>

      {/* Service 2 */}
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3, borderRadius: 2 }}>
          <CardActionArea>
          <CardMedia
              component="img"
              height="100"
              image={img2}
              alt="Transactions Rapides"
              sx={{height:"200px",width:"auto"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Paiements Flexibles
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Profitez de diverses options de paiement : cartes bancaires, portefeuilles électroniques, et plus encore.
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            startIcon={<CreditCardIcon />}
            variant="contained"
            sx={{ width:"90%", margin:"5%", backgroundColor: '#E67E22', '&:hover': { backgroundColor: '#D35400' } }}
          >
            Choisir ma méthode
          </Button>
        </Card>
      </Grid>

      {/* Service 3 */}
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3, borderRadius: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={img1}
              alt="Transactions Rapides"
              sx={{height:"200px",width:"auto"}}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                Transactions Rapides
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Effectuez des transactions rapides, sans attente et sans complication, pour une expérience fluide.
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button
            startIcon={<AttachMoneyIcon />}
            variant="contained"
            sx={{ width:"90%", margin:"5%", backgroundColor: '#E67E22', '&:hover': { backgroundColor: '#D35400' } }}
          >
            Faire un paiement
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};


