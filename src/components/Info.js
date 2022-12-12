import React from "react";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useGloblaContext } from "../context/context";

const UserInfo = () => {
  const { user } = useGloblaContext();
  console.log(user);
  const { followers, public_gists, public_repos, following } = user;
  const userInfo = [
    {
      id: 1,
      number: public_repos,
      name: "Repos",
      icon: <GoRepo className="icon" />,
      color: "pink",
    },
    {
      id: 2,
      number: followers,
      name: "Followers",
      icon: <FiUsers className="icon" />,
      color: "green",
    },
    {
      id: 3,
      number: following,
      name: "Following",
      icon: <FiUserPlus className="icon" />,
      color: "purple",
    },
    {
      id: 4,
      number: public_gists,
      name: "Gists",
      icon: <GoGist className="icon" />,
      color: "yellow",
    },
  ];

  return (
    <Wrapper className="section-center">
      {userInfo.map((data) => {
        return (
          <article className="item" key={data.id}>
            <span className={data.color}>{data.icon}</span>
            <div>
              <h3>{data.number}</h3>
              <p>{data.name}</p>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
