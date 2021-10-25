import React, { Fragment } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './styles/master.scss';
import Counter from './components/Counter';
// import { useWindowScroll } from 'react-use';

function App() {
  // const { y } = useWindowScroll();

  const selected = localStorage.getItem('i18nextLng') || 'en';

  const isHindi = selected === 'hi';

  const { t } = useTranslation();

  const onChange = ({ target: { value } }) => {
    i18next.changeLanguage(value);
    localStorage.setItem('i18nextLng', value);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <Fragment>
      <header className="pt-3 pt-md-4">
        <Navbar className="bg-transparent">
          <Container>
            <Navbar.Brand className="d-flex align-items-center px-md-3">
              <img src="/assets/logo.png" width="75px" className="mr-3" />
              <span className="d-none d-md-inline-block h2 my-0 font-weight-bold">
                {t('Mera Rozgaar')}
              </span>
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link
                  className="text-reset"
                  target="_blank"
                  href="https://docs.google.com/document/d/13BfrngetUtc8guBOEenMuZ1DsCzImYAwcvb2IWdbbOk/edit?usp=sharing">
                  {t('About Us')}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <form className="ml-md-3">
              <div className="mb-0 form-group">
                <select
                  onChange={onChange}
                  value={selected}
                  className="form-control form-control-sm">
                  <option value="hi">हिंदी</option>
                  <option value="en">English</option>
                </select>
              </div>
            </form>
          </Container>
        </Navbar>
      </header>
      <section className="mt-0 pt-0 pb-md-5">
        <Container className="pt-5 pb-md-5">
          <Row className="align-items-start">
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <h1 className="display-45 text-primary">
                {t('Find your dream job with Mera Rozgaar app')}
              </h1>
              <p className="lead">
                {t(
                  'An innovative platform to provide standardized employment in the blue-collar and white-collar employment markets',
                )}
              </p>
              <div className="d-md-block pt-4">
                <Button
                  size="lg"
                  href="https://employee.merarozgaar.app"
                  target="_blank"
                  className="mr-3 py-md-3 px-3 px-md-5">
                  {t('Find a job')}
                </Button>
                <Button
                  as="a"
                  size="lg"
                  href="https://employer.merarozgaar.app"
                  target="_blank"
                  className="ml-3 py-md-3 px-3 px-md-5">
                  {t('Start hiring')}
                </Button>
              </div>
              {/*<div className="mt-4">*/}
              {/*  <a*/}
              {/*    className="text-reset"*/}
              {/*    target="_blank"*/}
              {/*    href="https://play.google.com/store/apps/details?id=app.merarozgaar">*/}
              {/*    <img*/}
              {/*      src="https://lh3.googleusercontent.com/VO0_vREV6OaHYgUWqgfIG6ht1jLZcvJlJVt2gw_bCl2qTXKOUIEmpUosnnRIpgmDCdLCwQJcfWUon48BZnjgt1MzWoOQJKhQYxJw4eyTB_FMETA3dUg=rwa-s1439"*/}
              {/*      width="175px"*/}
              {/*    />*/}
              {/*  </a>*/}
              {/*</div>*/}
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 5, offset: 1, order: 2 }}>
              <img
                src="/assets/banner2.png"
                className="w-100 mt-n5 mb-5 mb-md-0"
              />
              <a
                className="mt-md-5 mb-5 mb-md-0 ml-md-3 d-inline-block text-reset"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=app.merarozgaar">
                <img
                  src="https://lh3.googleusercontent.com/VO0_vREV6OaHYgUWqgfIG6ht1jLZcvJlJVt2gw_bCl2qTXKOUIEmpUosnnRIpgmDCdLCwQJcfWUon48BZnjgt1MzWoOQJKhQYxJw4eyTB_FMETA3dUg=rwa-s1439"
                  width="175px"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5">
        <Container className="pt-5 text-center">
          <Row>
            <Col className="mb-5" xs={{ span: 12 }}>
              <h2 className="text-primary">{t('Popular Categories')}</h2>
            </Col>
          </Row>
          <Row className="text-center">
            {[
              {
                title: isHindi ? 'कॉल सेंटर/कॉलिंग' : 'Call Centre/Calling',
                icon: '/assets/icons/005-call-center-agent.png',
              },
              {
                title: isHindi ? 'लेबर' : 'Construction Labour',
                icon: '/assets/icons/004-under-construction.png',
              },
              {
                title: isHindi ? 'डिलिव्री व्यक्ति' : 'Delivery person',
                icon: '/assets/icons/006-delivery-man.png',
              },
              {
                title: isHindi ? 'ड्राइवर' : 'Driver',
                icon: '/assets/icons/007-driver.png',
              },
              {
                title: isHindi ? 'फैक्टरी मजदूर' : 'Factory worker',
                icon: '/assets/icons/002-worker.png',
              },
              {
                title: isHindi ? 'घरेलू मदद और रसोइया' : 'Househelp & Cook',
                icon: '/assets/icons/008-cooking.png',
              },
              {
                title: isHindi ? 'रिसेप्शनिस्ट' : 'Receptionist',
                icon: '/assets/icons/001-receptionist.png',
              },
              {
                title: isHindi ? 'सुरक्षा गार्ड' : 'Security Guard',
                icon: '/assets/icons/010-security-guard.png',
              },
            ].map(({ icon, title }, i) => (
              <Col key={i} xs={{ span: 6 }} md={{ span: 3 }} className="py-3">
                <Card className="border-0">
                  <Card.Body>
                    <img className="w-75" src={icon} />
                  </Card.Body>
                </Card>
                <h2 className="lead font-weight-bold text-capitalize">
                  {title}
                </h2>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ece5dd"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <section className="pt-5 pb-5" style={{ background: '#ece5dd' }}>
        <Container className="pb-5 text-center">
          <Row>
            <Col xs={{ span: 10, offset: 1 }}>
              <h2 className="mb-4 text-primary">
                {t('Job Search, Naukri, Best Companies')}
              </h2>
              <p className="mb-5 lead text-center">
                {t(
                  'Mera Rozgaar offers job opportunities in more than 100 professions spanning over 50 industrial sectors ranging from aerospace to plumbing',
                )}
              </p>
            </Col>
            <Col md={{ span: 4 }} className="py-5 text-center">
              <img src="/assets/jobs.png" className="w-50 mb-3" />
              <p className="h3">
                <Counter start={10000} end={10000} />+ {t('Jobs')}
              </p>
            </Col>
            <Col md={{ span: 4 }} className="py-5 text-center">
              <img src="/assets/industries.png" className="w-50 mb-3" />
              <p className="h3">
                <Counter start={50} end={50} />+ {t('Industries')}
              </p>
            </Col>
            <Col md={{ span: 4 }} className="py-5 text-center">
              <img src="/assets/categories.png" className="w-50 mb-3" />
              <p className="h3">
                <Counter start={100} end={100} />+ {t('Categories')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5 text-center">
        <Container className="pt-5">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h2 className="mt-md-5 mb-4 text-primary">
                {t('How does Mera Rozgaar Help')}
              </h2>
              <p className="mb-0 lead">
                {t(
                  'We at Mera Rozgaar also help our candidates groom and get ready for their career ahead through our skilling, training, and counseling services. Our motto is to facilitate the hiring of the most suitable candidates who can be proud assets to the organization they work for.',
                )}
              </p>
            </Col>
            <Col md={{ span: 8, offset: 2 }}>
              <img
                className="mt-n5"
                src="/assets/footer.png"
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5 bg-secondary" style={{ marginTop: '-60px' }}>
        <Container className="pt-5 pb-5 pb-0 text-center">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <p className="mt-5 h3 font-weight-normal">
                {t('Trusted by 100+ leading companies')}
              </p>
              {isHindi ? (
                <h1 className="">
                  <span className="text-primary">{t('Mera Rozgar app')}</span>{' '}
                  {t('Download')}
                </h1>
              ) : (
                <h1 className="">
                  {t('Download')}{' '}
                  <span className="text-primary">{t('Mera Rozgar app')}</span>
                </h1>
              )}
              <div className="pt-4">
                <a
                  className="text-reset"
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=app.merarozgaar">
                  <img
                    src="https://lh3.googleusercontent.com/VO0_vREV6OaHYgUWqgfIG6ht1jLZcvJlJVt2gw_bCl2qTXKOUIEmpUosnnRIpgmDCdLCwQJcfWUon48BZnjgt1MzWoOQJKhQYxJw4eyTB_FMETA3dUg=rwa-s1439"
                    width="175px"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L30,37.3C60,43,120,53,180,85.3C240,117,300,171,360,176C420,181,480,139,540,117.3C600,96,660,96,720,96C780,96,840,96,900,117.3C960,139,1020,181,1080,165.3C1140,149,1200,75,1260,85.3C1320,96,1380,192,1410,240L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </section>
      <section className="mt-md-n5 pb-5">
        <Container>
          <Row>
            <Col xs={{ span: 12 }}>
              <Navbar expand="md">
                <Navbar.Brand>
                  <span className="d-block font-weight-bold">
                    {t('Mera Rozgaar')}
                  </span>
                  <small className="d-none d-md-inline-block">
                    &copy; {t('2021 Mera Rozgaar. All rights reserved.')}
                  </small>
                </Navbar.Brand>
                <Nav className="ml-md-auto">
                  {/*<Nav.Item>*/}
                  {/*  <Nav.Link>About Us</Nav.Link>*/}
                  {/*</Nav.Item>*/}
                  <Nav.Item>
                    <Nav.Link
                      href="https://docs.google.com/document/d/1cY-tOm3MBme7jehiUGTUbFwRArPQMcOy4pyMNY08MCg/edit?usp=sharing"
                      target="_blank">
                      {t('Terms & Conditions')}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="https://docs.google.com/document/d/11iYqzvz_7IZYlt-B7wW-2R5d7lCmwqrhJDxPiCWNO3k/edit?usp=sharing"
                      target="_blank">
                      {t('Privacy Policy')}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="mailto:contact@merarozgaar.app">
                      {t('Help & Support')}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="d-md-none">
                    <small className="d-block mt-5">
                      &copy; {t('2021 Mera Rozgaar. All rights reserved.')}
                    </small>
                  </Nav.Item>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export default App;
