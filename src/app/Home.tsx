import React from 'react';
import './Home.css';

export interface HomeState
{
		
};

export default class Home extends React.Component<{}, HomeState>
{
	public constructor(props: any)
	{
		super(props);
		
		this.state = {
			
		};
	}
	
	public render()
	{
		return <h1 className="header">
			what the fwiggin HECK
		</h1>
	}
};
