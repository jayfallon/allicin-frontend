import Link from 'next/link';

import HomepageStyles from './styles';

const Homepage = props => (
  <HomepageStyles>
    <nav className="homepage__nav">
      <ul>
        <li>
          <Link href="/session-request">
            <a title="Request a Session">Find Classes</a>
          </Link>
        </li>
        <li>
          <Link href="/session-request">
            <a title="Request a Session">Request a Session</a>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="homepage__dash--wrapper">
      <div className="homepage__dash--personal">
        <img src="/static/people/person-05.png" alt="" />
        <ul>
          <li className="username">Student Name</li>
          <li className="role">Student</li>
          <li className="school">UMass Boston</li>
        </ul>
      </div>
      <ul className="homepage__dash--meta">
        <li>
          <span>Upcoming</span>
          <span>1</span>
        </li>
        <li>
          <span>Classes</span>
          <span>3</span>
        </li>
        <li>
          <span>Sessions</span>
          <span>21</span>
        </li>

        <li>
          <span>Notifications</span>
          <span>1</span>
        </li>
      </ul>
    </div>
    <div className="homepage__group--wrapper">
      <h3>Upcoming Sessions</h3>
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
          <p>Meets every Monday at 12pm EST</p>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-06.png"
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
                src="/static/images/class-02.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 130</li>
              <li className="course-title">Goddesses and Supergirls</li>
              <li className="school-name">UMass Boston</li>
            </ul>
          </div>
          <p>Meets every Monday at 12pm EST</p>
        </div>
        <div className="class__card--grid">
          <div className="class__card--tutor">
            <img
              className="class__card--user-avatar"
              src="/static/people/person-07.png"
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
                src="/static/images/class-03.png"
                alt="school name"
              />
            </div>

            <ul className="class__card--course-info">
              <li className="course-name">HIST 372</li>
              <li className="course-title">The Early Republic</li>
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

export default Homepage;
