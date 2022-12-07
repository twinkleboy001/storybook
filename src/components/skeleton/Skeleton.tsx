import React from 'react';
import ContentLoader from 'react-content-loader';
import omit from 'lodash/omit';

interface SkeletonProps {
	/**
	 * Use viewBox props to set a custom viewBox value,
	   for more information about how to use it,
	   read the article How to Scale SVG.
	   Defaults to undefined
	*/
	viewBox?: string;
	/**
	 * The type of skeleton, Defaults to be Customs
	 */
	type?: 'Description' | 'Code' | 'List' | 'BulletList' | 'Custom' | 'Rectangle';
	/**
	 * Opt-out of animations with false, Defaults to true
	 */
	animate?: boolean;
	/**
	 * Animation speed in seconds, Defaults to 1.2
	 */
	speed?: number;
	/**
	 * Interval of time between runs of the animation,
	 * as a fraction of the animation speed, Defaults to 0.25
	 */
	interval?: number;
	/**
	 * Used as background of animation, Defaults to #f5f6f7
	 */
	backgroundColor?: string;
	/**
	 * Used as the foreground of animation, Defaults to #eee
	 */
	foregroundColor?: string;
	/**
	 * Custom style, Defaults to {}
	 */
	style?: React.CSSProperties;
	/**
	 * the width of a rectangle
	 */
	width?: number | string;
	/**
	 * the height of a rectangle
	 */
	height?: number | string;
	/**
	 * the border radius of a rectangle
	 */
	borderRadius?: number;
	/**
	 * the unique key of the skeleton
	 */
	uniqueKey?: string;
	xAxis?: number | string;
	yAxis?: number | string;
}

const Skeleton = (props: SkeletonProps) => {
	const { type, width, height, borderRadius, uniqueKey, xAxis, yAxis } = props;
	const loaderProps = omit(props, ['width', 'height']);
	const custom = (
		<ContentLoader viewBox="0 0 320 81" {...props} uniqueKey={uniqueKey || 'loader-custom'}>
			<rect x="12" y="12" rx="3" ry="3" width="45" height="45" />
			<rect x="81" y="12" rx="3" ry="3" width="178" height="7.9" />
			<rect x="81" y="27.9" rx="3" ry="3" width="103" height="7.9" />
			<rect x="81" y="43.9" rx="3" ry="3" width="193" height="7.9" />
		</ContentLoader>
	);
	const list = (
		<ContentLoader viewBox="0 0 320 145.7" {...props} uniqueKey={uniqueKey || 'loader-list'}>
			<rect x="8" y="48" rx="3" ry="3" width="95" height="18" />
			<rect x="8" y="74" rx="3" ry="3" width="256" height="7.9" />
			<rect x="8" y="89.9" rx="3" ry="3" width="113" height="7.9" />
			<rect x="8" y="105.8" rx="3" ry="3" width="168" height="7.9" />
		</ContentLoader>
	);
	const code = (
		<ContentLoader viewBox="0 0 320 63" {...props} uniqueKey={uniqueKey || 'loader-code'}>
			<rect x="8" y="0" rx="3" ry="3" width="172" height="18" />
			<rect x="12" y="36" rx="3" ry="3" width="16" height="16" />
			<rect x="36" y="40.55" rx="3" ry="3" width="178" height="7.9" />
		</ContentLoader>
	);
	const description = (
		<ContentLoader viewBox="0 0 304 187.6" uniqueKey={uniqueKey || 'loader-description'} {...props}>
			<rect x="79.5" y="16" rx="3" ry="3" width="145" height="18" />
			<rect x="16" y="46" rx="3" ry="3" width="60" height="7.9" />
			<rect x="243" y="46" rx="3" ry="3" width="45" height="7.9" />
			<rect x="16" y="69.9" rx="3" ry="3" width="68" height="7.9" />
			<rect x="229" y="69.9" rx="3" ry="3" width="59" height="7.9" />
			<rect x="16" y="93.8" rx="3" ry="3" width="97" height="7.9" />
			<rect x="243" y="93.8" rx="3" ry="3" width="45" height="7.9" />
			<rect x="16" y="117.7" rx="3" ry="3" width="45" height="7.9" />
			<rect x="243" y="117.7" rx="3" ry="3" width="45" height="7.9" />
			<rect x="16" y="153.6" rx="3" ry="3" width="272" height="18" />
		</ContentLoader>
	);
	const rectangle = (
		<ContentLoader
			viewBox="0 0 320 29"
			{...loaderProps}
			uniqueKey={uniqueKey || 'loader-rectangle'}
		>
			<rect
				x={xAxis || '12'}
				y={yAxis || '11'}
				rx={borderRadius || '3'}
				ry={borderRadius || '3'}
				width={width || '110'}
				height={height || '7.9'}
			/>
		</ContentLoader>
	);
	const bulletList = (
		<ContentLoader viewBox="0 0 320 260" {...props} uniqueKey={uniqueKey || 'loader-bulletList'}>
			<circle cx="22" cy="14" r="14" />
			<rect x="44" y="5" rx="3" ry="3" width="176" height="18" />
			<rect x="21" y="36" rx="3" ry="3" width="2" height="72" />
			<rect x="44" y="52" rx="3" ry="3" width="254" height="8" />
			<rect x="44" y="84" rx="3" ry="3" width="177" height="8" />
			<circle cx="22" cy="130" r="14" />
			<rect x="44" y="121" rx="3" ry="3" width="176" height="18" />
			<rect x="21" y="152" rx="3" ry="3" width="2" height="48" />
			<circle cx="22" cy="222" r="14" />
			<rect x="44" y="214" rx="3" ry="3" width="176" height="18" />
		</ContentLoader>
	);
	const renderLoaderByType = () => {
		switch (type) {
			case 'Description':
				return description;
			case 'Code':
				return code;
			case 'List':
				return list;
			case 'BulletList':
				return bulletList;
			case 'Custom':
				return custom;
			case 'Rectangle':
				return rectangle;
			default:
				return <></>;
		}
	};
	return renderLoaderByType();
};

Skeleton.defaultProps = {
	animate: true,
	speed: 1.2,
	interval: 0.25,
	backgroundColor: '#f5f6f7',
	foregroundColor: '#eee',
	style: {},
	type: 'Custom',
	borderRadius: 3,
};

export default Skeleton;
