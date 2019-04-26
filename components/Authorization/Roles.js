import Link from 'next/link';
import Head from 'next/head';

import AuthorizationStyles from './styles';

const Roles = props => (
  <AuthorizationStyles>
    <Head>
      <title>Allicin FrontEnd || Choose Your Role</title>
    </Head>
    <h2 className="roles__heading">Which role interests you?</h2>
    <div className="roles__selection--wrapper">
      <ul className="roles__selection--list">
        <li className="roles__selection--list-item">
          <div className="role__select--graphic">
            <Link href="/student">
              <a href="/student">
                <img src="/static/images/student--temp.png" alt="Student" />
              </a>
            </Link>
          </div>
          <div className="role__select--meta">
            <h4 className="role__select--heading">
              <Link href="/student">
                <a title="Student">Student</a>
              </Link>
            </h4>
            <p>
              A student is someone who is either enrolled or soon to be enrolled
              in a class and is looking for a tutor to help them at any time
              through their course.
            </p>
            <p>
              Most people start out as student and then move into other roles,
              even though learning is a lifelong pursuit.
            </p>
          </div>
        </li>
        <li className="roles__selection--list-item">
          <div className="role__select--graphic">
            <Link href="/tutor">
              <a href="/tutor">
                <img src="/static/images/tutor--temp.png" alt="tutor" />
              </a>
            </Link>
          </div>
          <div className="role__select--meta">
            <h4 className="role__select--heading">
              <Link href="/tutor">
                <a title="tutor">Tutor</a>
              </Link>
            </h4>
            <p>
              A tutor is a teacher who teaches a student outside of school,
              especially in order to give the student extra help with a subject
              they find difficult.
            </p>
            <p>
              A tutor is generally an expert in the subjects they teach and
              enjoys helping other overcome learning, studying or testing
              obstacles.
            </p>
          </div>
        </li>
        <li className="roles__selection--list-item">
          <div className="role__select--graphic">
            <Link href="/tester">
              <a href="/tester">
                <img src="/static/images/tester--temp.png" alt="tester" />
              </a>
            </Link>
          </div>
          <div className="role__select--meta">
            <h4 className="role__select--heading">
              <Link href="/tester">
                <a title="tester">Tester</a>
              </Link>
            </h4>
            <p>
              A tester is someone who loves creating problem sets, quizzes and
              tests. While they may be good enough to make it difficult to past
              their assignments, they are in the best position to help students
              further their knowledge and master their subject.
            </p>
          </div>
        </li>

        <li className="roles__selection--list-item">
          <div className="role__select--graphic">
            <Link href="/reviewer">
              <a href="/reviewer">
                <img src="/static/images/reviewer--temp.png" alt="reviewer" />
              </a>
            </Link>
          </div>
          <div className="role__select--meta">
            <h4 className="role__select--heading">
              <Link href="/reviewer">
                <a title="reviewer">Reviewer</a>
              </Link>
            </h4>
            <p>
              Reviewers are usually the quiet folks in the back of the room, out
              of sight and out of mind, keeping an eye on everything that
              happens and ready to offer insights and advice on how to best
              prepare for academic success.
            </p>
            <p>
              Reviewers review and they review everything: homework, tests,
              classes, courses, instructors and more!
            </p>
          </div>
        </li>
      </ul>
    </div>
    <p className="skip__for--now">
      <Link href="/app">
        <a title="Choose your role">I'll figure it out later.</a>
      </Link>
    </p>
  </AuthorizationStyles>
);

export default Roles;
