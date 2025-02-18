import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';

const Footer = () => {

    const currentYear = new Date().getFullYear(); 
  return (
    <Box sx={{
      backgroundColor: '#333',
      color: 'white',
      py: 4,
      mt: 4,
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Section 1: Liens de navigation */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Liens rapides
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="#" color="inherit">Accueil</Link></li>
              <li><Link href="#" color="inherit">Nos services</Link></li>
              <li><Link href="#" color="inherit">À propos</Link></li>
              <li><Link href="#" color="inherit">Contact</Link></li>
            </ul>
          </Grid>

          {/* Section 2: Informations de contact */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contactez-nous
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Typography variant="body2">Email: contact@votre-site.com</Typography></li>
              <li><Typography variant="body2">Téléphone: +123 456 789</Typography></li>
              <li><Typography variant="body2">Adresse: 123 Rue Exemple, Ville, Pays</Typography></li>
            </ul>
          </Grid>

          {/* Section 3: Copyright */}
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body2">
              © {currentYear} VotreSite. Tous droits réservés.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
