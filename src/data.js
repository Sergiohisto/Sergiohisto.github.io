// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatarespe.png';
import Avatar2Img from '../src/assets/img/testimonials/avatarglo.jpg';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import LogoV2 from '../src/assets/img/logo-v2.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Inicio',
    href: '#',
  },
  {
    name: 'Ayuda',
    href: '#',
  },
  {
    name: 'Feturas entradas',
    href: '#',
  },
  
];

export const heroData = {
  title: ` Ley 2101 del 2021.`,
  subtitle:
    'El 15 de julio de este año entro en vigencia la Ley 2101 del 2021, que tiene como propósito la reducción de jornada laboral en Colombia.',
  btnText: 'Leer más ',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'La jornada actual en nuestro país es de 48 horas semanales ',
  subtitle:
    'La iniciativa contempla disminuir gradualmente las horas de trabajo semanales de 48 horas a 42 horas, una medida que entrará en vigor en julio de 2023 y quedará implementada en su totalidad para 2026.',
};

export const featuresData = {
  title: '<Futuras entradas>',
  subtitle:
    'Somos un portal que ofrece información y servicios jurídicos. .',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Seguimiento a los procesos',
      description:
        'Tendrás toda la información de las diferentes actuaciones, notificaciones y cualquier información referente al procesos que llevas con nosotros.',
      linkText: 'Más información',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Acceso las 24 horas ',
      description:
        'Acceso las 24 horas del día a toda la información de los procesos judiciales, agendamientos directos y rápidos con los abogados disponibles. .',
      linkText: 'Más información',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Descargas',
      description:
        'Acceso directo a los documentos generados dentro del proceso, con descarga en pdf fácil y rápido.',
      linkText: 'Más información',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Documentos seguros',
      description:
        'Todos los documentos están protegidos y seguros contra cualquier ataque informáticos ',
      linkText: 'Más información',
      delay: '1300',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'El espectador',
    web: 'www.elespectador.com',
    message:
      ' "Se redujo la jornada laboral en Colombia: ¿qué pasa si su empresa no cumple? Desde este sábado 15 de julio la jornada laboral en el país pasa de 48 a 47 horas." ',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Gloria Inés Ramírez',
    web: '@gloriainesramir',
    message:
      '“Esta ley tampoco afecta o modifica las jornadas laborales inferiores de trabajadores con horarios especiales, como la de menores de edad que trabajan con contrato laboral y con permiso del Ministerio de Trabajo”',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Jim Ferry',
    web: 'jimjimf.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Try for free!',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'Puerto Colombia, Colombia',
  email: 'slarrieta02@gmail.com',
  phone: '',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Datawarehouse™,.',
  icon: <BsChatDotsFill />,
};
