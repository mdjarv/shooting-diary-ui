import React, { useEffect } from 'react';

import { gql, request } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { graphql } from './gql';

const sessionsQueryDocument = graphql(/* GraphQL */ `
  query Sessions {
    sessions {
      id
      name
      date
      series {
        id
        order
        shots {
          id
          score
          inner
        }
      }
    }
  }
`);

export const App: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['sessions'],
    queryFn: () =>
      request('http://localhost:8080/query', sessionsQueryDocument),
  });

  useEffect(() => {
    console.log(data?.sessions);
  }, [data]);

  return (
    <div className="flex flex-col md:max-w-4xl mx-auto h-full">
      <header className="bg-slate-800">
        <h1 className="text-3xl mx-24 my-12">Shooting Diary</h1>
      </header>
      <main className="h-full p-8 bg-slate-700">
        <h2 className="text-2xl font-bold">Sessions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className="my-4 gap-2 flex flex-col">
            {data?.sessions.map((session: any) => (
              <li key={session.id}>
                <button className="bg-slate-600 py-2 px-4 rounded-full hover:bg-slate-400 cursor-pointer w-full hover:text-slate-800 transition-colors active:bg-slate-200">
                  {session.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default App;
