import Link from 'next/link';

import HomepageStyles from './styles';

const TutorHomepage = props => (
  <HomepageStyles>
    <nav className="homepage__nav">
      <ul>
        <li>
          <Link href="/session-request">
            <a title="Request a Session">New Class</a>
          </Link>
        </li>
        <li>
          <Link href="/session-request">
            <a title="Request a Session">New Session</a>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="homepage__dash--wrapper">
      <div className="homepage__dash--personal">
        <img src="/static/people/person-08.png" alt="" />
        <ul>
          <li className="username">Tutor Name</li>
          <li className="role">Tutor</li>
          <li className="school">History</li>
        </ul>
      </div>
      <ul className="homepage__dash--meta">
        <li>
          <span>Upcoming</span>
          <span>1</span>
        </li>
        <li>
          <span>Classes</span>
          <span>1</span>
        </li>
        <li>
          <span>Sessions</span>
          <span>54</span>
        </li>

        <li>
          <span>Notifications</span>
          <span>0</span>
        </li>
      </ul>
    </div>
    <div className="homepage__group--wrapper">
      <h3>Upcoming Sessions</h3>
      <div className="homepage__group--grid">
        <div className="class__card--grid">
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
          <div className="class__card--join">
            <button>Join via Slack</button>
          </div>
        </div>
      </div>
    </div>
    <div className="homepage__group--wrapper">
      <h3>Classes</h3>
      <div className="homepage__group--grid">
        <div className="class__card--grid">
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <p>Meets every Monday at 12pm EST</p>
        </div>
      </div>
    </div>

    <div className="homepage__group--wrapper">
      <h3>Past Sessions</h3>
      <div className="homepage__group--grid">
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-08.png"
              height="52"
              width="50"
              alt="username"
            />
            <p className="class__card--username">
              <a href="username" title="username">
                Tutor Name
              </a>
            </p>
          </div>
          <div className="class__card--course">
            <div className="image-wrapper">
              <img
                className="class__card--course-avatar"
                src="/static/images/class-01.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 150</li>
              <li className="course-title">History of Latin America</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <ul className="class__card--meeting-list">
            <li>
              <span>Date</span>
              <span className="number">29</span>
              <span>APR 2019</span>
            </li>
            <li>
              <span>Time</span>
              <span className="number">12:00</span>
              <span>PM EST</span>
            </li>
            <li>
              <span>Seats</span>
              <span className="number">3</span>
              <span>Available</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </HomepageStyles>
);

export default TutorHomepage;
