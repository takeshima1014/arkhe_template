/**
 * 楽久屋コーポレートサイト見出しブロック
 */
 import { __ } from '@wordpress/i18n';
 import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

//  import { Button } from '@wordpress/components';
 import './editor.scss';
 
	const Edit = ( props ) => {
	 const {
		 attributes: { eiji, name, content },
		 setAttributes,
	 } = props;
 
		const blockProps = useBlockProps({ className: 'c-rky-exp-top-area' });
		const ALLOWED_BLOCKS = [ 'core/image' ];
		
	 const onChangeEiji = ( value ) => {
		setAttributes( { eiji: value } );
		};

	 const onChangeName = ( value ) => {
		 setAttributes( { name: value } );
	 };

	 const onChangeContent = ( value ) => {
		 setAttributes( { content: value } );
	 };
 
	 return (
		<section { ...blockProps }>
			<InnerBlocks
				 tagName="figure" 
				 allowedBlocks={ALLOWED_BLOCKS}
				 className="c-rky-exp-top-area__media"
			 />
			<div className="c-rky-exp-title animate fadeInRight u-wbr">
				<RichText
					tagName="p"
					placeholder={ '英語を入力' }
					value={eiji}
					className="c-rky-exp-title__eiji"
					onChange={ onChangeEiji }
				/>
				<RichText
					tagName="h1"
					placeholder={ '施設名' }
					value={name}
					className="c-rky-exp-title__name u-mt-0"
					onChange={ onChangeName }
				/>
				<RichText
						tagName="p"
						className="c-rky-exp-title__text u-mt-10"
						placeholder={	'コメントを入力'}
						value={content}
						onChange={ onChangeContent }
					/>
			</div>
			<figure className="c-rky-exp-top-area__icon">
				 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120">
					 <path fill="#333" d="M28.19,55.59c-.23-.04-.41-.15-.54-.34-.14-.19-.18-.4-.14-.64l1.23-6.98c-.46,.58-.95,1.14-1.47,1.69-.52,.55-.98,.99-1.39,1.34-.2,.17-.42,.26-.66,.25s-.45-.09-.61-.26c-.14-.17-.2-.36-.19-.59,.01-.22,.11-.4,.29-.54,.35-.28,.72-.62,1.13-1.02,.41-.41,.82-.84,1.25-1.31,.43-.47,.82-.93,1.2-1.39,.37-.46,.69-.88,.95-1.26l-2.73-.48c-.21-.04-.38-.15-.5-.33-.12-.18-.17-.37-.13-.58,.04-.21,.14-.38,.32-.51,.18-.12,.37-.17,.58-.13l2.78,.49,.37-2.11c-.82,.02-1.6,.04-2.33,.03-.27,0-.49-.06-.66-.18-.17-.13-.26-.31-.27-.56,0-.26,.07-.45,.23-.58,.16-.13,.36-.19,.6-.18,.59,.01,1.26,0,2.02-.01,.75-.02,1.5-.07,2.23-.14,.73-.07,1.35-.15,1.86-.24,.26-.06,.48-.03,.68,.09,.2,.12,.31,.3,.33,.53,.03,.21-.02,.41-.14,.59-.12,.18-.3,.29-.52,.32-.32,.05-.67,.09-1.06,.13-.39,.04-.8,.08-1.23,.1l-.44,2.5,2.46,.43c.21,.04,.38,.14,.51,.32,.12,.18,.17,.37,.13,.59-.04,.2-.14,.37-.32,.5-.18,.13-.37,.18-.59,.14l-2.46-.43-.16,.9c.18,.3,.4,.66,.67,1.06,.27,.4,.53,.79,.79,1.16s.46,.65,.61,.84c.14,.18,.19,.37,.17,.58-.02,.21-.13,.38-.3,.52-.18,.14-.38,.19-.61,.16-.23-.03-.4-.14-.52-.33-.13-.2-.3-.48-.52-.82-.21-.34-.43-.7-.64-1.07l-1.24,7.05c-.04,.24-.15,.42-.34,.55-.18,.13-.4,.17-.63,.13Zm12.22,1.38c-.27,.06-.51,.02-.72-.12-.21-.13-.33-.33-.36-.58-.05-.25-.09-.52-.13-.79-.04-.27-.1-.56-.16-.85-.55,.02-1.17,.03-1.86,.04s-1.41,.01-2.14,0c-.74,0-1.44,0-2.12-.02-.68,0-1.27-.02-1.77-.03-.27,0-.49-.08-.66-.24-.17-.17-.25-.38-.24-.65,0-.25,.08-.45,.26-.6,.18-.16,.42-.23,.7-.22,.17,0,.35,0,.54,.02,.19,0,.4,.02,.61,.03,.44-.87,.89-1.84,1.37-2.91,.47-1.07,.94-2.18,1.4-3.31,.46-1.13,.88-2.23,1.27-3.29,.39-1.06,.71-2.02,.98-2.86,.08-.26,.24-.44,.47-.55,.23-.11,.46-.12,.7-.04,.24,.09,.42,.24,.52,.45,.11,.21,.11,.44,.01,.71-.31,.86-.66,1.81-1.05,2.84-.39,1.03-.81,2.08-1.25,3.14-.44,1.07-.88,2.1-1.33,3.11-.45,1.01-.88,1.93-1.3,2.78,.8,.01,1.61,.02,2.44,.03,.83,0,1.55,.02,2.17,.02-.16-.75-.34-1.5-.54-2.23-.19-.73-.39-1.38-.59-1.95-.09-.23-.07-.46,.05-.67,.12-.21,.3-.34,.52-.39,.24-.06,.46-.04,.67,.07,.2,.11,.34,.28,.41,.51,.17,.5,.35,1.07,.53,1.72,.18,.65,.36,1.33,.52,2.03,.17,.7,.32,1.38,.46,2.03,.14,.65,.25,1.23,.32,1.73,.06,.26,.02,.48-.11,.66-.13,.18-.32,.3-.58,.36Zm4.09,.22c-.18-.17-.27-.38-.27-.61,0-.23,.07-.44,.23-.62,.67-.73,1.3-1.57,1.87-2.51,.57-.94,1.09-1.93,1.56-2.96,.47-1.04,.87-2.05,1.2-3.04-.4-.02-.78-.04-1.15-.08-.37-.03-.72-.07-1.05-.1-.24-.03-.44-.14-.59-.33-.15-.19-.22-.4-.19-.62,.03-.24,.14-.43,.32-.58,.18-.15,.39-.21,.63-.18,.35,.04,.75,.08,1.19,.13,.44,.05,.89,.09,1.36,.12,.14-.5,.26-.98,.36-1.43,.1-.45,.17-.86,.21-1.24,.03-.24,.14-.43,.32-.57,.19-.14,.4-.2,.64-.17,.24,.02,.43,.12,.57,.31,.14,.19,.2,.41,.17,.65-.04,.36-.1,.74-.2,1.17-.09,.42-.21,.87-.35,1.35,.41,0,.8,.02,1.17,.02,.37,0,.7,0,.99-.03,.24-.02,.44,.05,.61,.22,.17,.17,.26,.38,.27,.61,0,.25-.07,.46-.23,.63-.16,.17-.36,.26-.61,.27-.36,0-.78,0-1.24-.01-.46-.01-.95-.03-1.46-.05-.37,1.11-.81,2.26-1.33,3.44-.53,1.18-1.1,2.3-1.74,3.37-.64,1.06-1.31,1.99-2.03,2.78-.16,.18-.36,.27-.6,.28-.24,0-.45-.07-.63-.23Zm13.15,1.83c-1.85,.07-3.4-.18-4.66-.75s-2.08-1.44-2.47-2.6c-.08-.23-.06-.46,.05-.67,.11-.21,.27-.36,.49-.44,.22-.08,.44-.06,.65,.04,.21,.1,.36,.27,.43,.5,.2,.6,.56,1.07,1.06,1.4,.5,.33,1.13,.55,1.88,.67,.75,.12,1.58,.16,2.49,.13,.23-.01,.44,.07,.62,.23,.18,.16,.27,.36,.28,.61,0,.23-.07,.44-.23,.61-.17,.17-.37,.26-.6,.27Zm.38-7.45c-.66-.28-1.43-.51-2.31-.68-.88-.17-1.71-.25-2.49-.24-.25,0-.45-.07-.62-.23-.16-.16-.25-.37-.26-.62-.01-.23,.07-.44,.23-.62,.17-.18,.37-.26,.62-.26,.91,.02,1.86,.12,2.83,.31,.97,.18,1.87,.44,2.69,.77,.22,.09,.37,.25,.46,.48,.09,.23,.08,.45-.02,.67-.09,.22-.25,.37-.47,.45-.22,.08-.45,.08-.68-.01Zm11.05,10.65c-.24-.04-.43-.16-.58-.35-.15-.19-.21-.41-.18-.65,.03-.25,.15-.45,.35-.6,.2-.15,.42-.2,.66-.16,1.31,.19,2.37,.21,3.18,.06,.81-.15,1.43-.48,1.86-.96,.43-.49,.71-1.11,.84-1.88,.12-.66,0-1.22-.33-1.68-.33-.45-.82-.77-1.46-.96-.64-.18-1.38-.21-2.23-.07-.84,.14-1.72,.47-2.63,.99-.36,.2-.69,.16-1.01-.12-.13-.13-.22-.28-.26-.47-.04-.19-.02-.36,.06-.53,.29-.6,.58-1.32,.88-2.18,.3-.86,.58-1.71,.83-2.56-.66-.1-1.27-.2-1.86-.31-.58-.1-1.1-.21-1.54-.31-.23-.07-.41-.2-.52-.41-.11-.21-.13-.42-.07-.64,.07-.23,.2-.41,.4-.53,.2-.12,.42-.15,.65-.08,.48,.12,1.01,.24,1.58,.36s1.17,.22,1.79,.32c.11-.39,.2-.77,.29-1.12,.08-.35,.14-.65,.19-.89,.04-.24,.16-.43,.34-.57,.19-.14,.4-.2,.64-.17,.23,.04,.41,.15,.57,.34s.2,.4,.15,.64c-.05,.24-.12,.53-.2,.88-.08,.35-.17,.72-.28,1.11,.66,.06,1.31,.11,1.93,.15s1.21,.03,1.75,0c.24-.02,.44,.05,.61,.21,.17,.17,.26,.37,.27,.62,.01,.23-.06,.44-.23,.62-.16,.18-.36,.27-.61,.26-.58,0-1.24-.02-1.97-.08-.73-.05-1.47-.12-2.21-.2-.21,.71-.43,1.4-.65,2.06-.22,.66-.42,1.18-.59,1.56,.73-.32,1.47-.52,2.22-.58,.75-.06,1.47,0,2.14,.19,.67,.19,1.26,.49,1.76,.89,.5,.41,.87,.91,1.11,1.5,.24,.6,.29,1.28,.15,2.04-.21,1.19-.67,2.13-1.38,2.82-.71,.69-1.61,1.15-2.71,1.37-1.1,.23-2.34,.24-3.73,.05Zm21.68,2.49c-.25,0-.46-.07-.65-.22-.19-.16-.29-.35-.31-.59-.02-.25,.05-.47,.2-.65,.16-.19,.36-.29,.61-.31,1.49-.11,2.68-.53,3.58-1.26,.89-.73,1.45-1.76,1.69-3.09,.15-.88,.09-1.69-.19-2.44-.28-.75-.75-1.39-1.39-1.93-.65-.54-1.46-.93-2.44-1.17-.56,2.05-1.22,3.79-2,5.24-.78,1.45-1.59,2.53-2.44,3.25-.84,.72-1.64,1.02-2.39,.89-.63-.11-1.16-.4-1.6-.87-.44-.47-.75-1.08-.92-1.83-.17-.75-.18-1.59-.01-2.51,.18-1.03,.55-1.95,1.1-2.76,.55-.81,1.24-1.49,2.06-2.02,.82-.53,1.74-.9,2.76-1.1,1.02-.2,2.08-.2,3.2,0,1.37,.24,2.54,.72,3.51,1.43,.97,.71,1.68,1.6,2.13,2.65,.45,1.06,.56,2.22,.34,3.48-.31,1.76-1.06,3.13-2.25,4.13-1.19,1-2.72,1.56-4.57,1.69Zm-5.41-4.04c.29,.05,.64-.11,1.04-.48,.41-.37,.84-.9,1.29-1.6,.45-.7,.9-1.54,1.34-2.53,.44-.98,.82-2.07,1.15-3.25-1.11-.03-2.08,.17-2.93,.6-.84,.43-1.53,1-2.05,1.72-.52,.72-.86,1.51-1.03,2.38-.16,.91-.12,1.65,.12,2.2,.24,.55,.6,.87,1.07,.95Zm-59.44,19.78c-.24,.05-.47,.01-.68-.11-.21-.12-.35-.3-.41-.53-.05-.23-.01-.45,.11-.67s.3-.35,.53-.4c1.64-.43,2.91-1.2,3.82-2.29,.9-1.09,1.53-2.61,1.87-4.54l-3.33-.59c-.08,.54-.17,1.06-.26,1.56-.09,.5-.18,.95-.28,1.35-.05,.24-.19,.42-.4,.54-.21,.12-.43,.16-.67,.11-.24-.05-.42-.19-.54-.4-.13-.21-.16-.43-.1-.67,.1-.4,.19-.83,.28-1.31,.09-.47,.17-.97,.25-1.49l-4.17-.74c-.24-.04-.42-.16-.56-.35-.13-.19-.18-.41-.14-.64,.04-.24,.16-.42,.35-.56,.19-.13,.41-.18,.65-.14l4.1,.72c.08-.5,.13-.98,.17-1.44,.04-.46,.06-.86,.07-1.19,0-.26,.1-.47,.27-.64s.38-.25,.63-.25c.24,0,.46,.09,.63,.27,.18,.17,.26,.38,.24,.62,0,.37-.03,.82-.08,1.33-.05,.51-.11,1.05-.19,1.61l3.37,.59c.1-.59,.2-1.17,.28-1.73,.08-.57,.14-1.06,.17-1.48,.03-.24,.14-.44,.32-.6,.18-.16,.4-.23,.64-.2,.25,.02,.46,.12,.61,.31,.15,.19,.22,.4,.21,.65-.05,.43-.12,.95-.2,1.54-.09,.6-.18,1.21-.27,1.82l3.89,.69c.24,.04,.42,.16,.56,.35,.13,.19,.18,.41,.14,.64-.04,.24-.16,.42-.35,.56-.19,.13-.41,.18-.64,.14l-3.87-.68c-.41,2.23-1.2,4.04-2.38,5.44-1.18,1.4-2.72,2.33-4.59,2.79Zm16.11-4.08c-.24-.04-.43-.16-.57-.36s-.19-.42-.15-.66c.04-.25,.17-.44,.36-.58,.2-.13,.42-.18,.65-.14l11.71,2.07c.24,.04,.43,.16,.57,.35,.14,.19,.19,.41,.14,.67-.04,.24-.16,.43-.36,.57s-.42,.19-.66,.15l-11.71-2.07Zm28.7,10.51c-1.69-.04-3.09-.13-4.21-.27-1.12-.14-2.02-.35-2.71-.63-.69-.28-1.22-.66-1.6-1.13-.43-.51-.67-1.13-.73-1.84-.06-.72-.02-1.47,.12-2.28l1.35-7.65c.04-.24,.17-.43,.37-.56,.2-.14,.43-.19,.66-.14,.24,.04,.43,.16,.57,.36,.14,.2,.19,.42,.15,.66l-.8,4.51c1.13-.07,2.29-.18,3.5-.32,1.21-.14,2.31-.31,3.31-.49,.24-.05,.46,0,.66,.14,.2,.14,.33,.33,.38,.57,.05,.24,0,.46-.13,.67-.13,.2-.33,.33-.58,.37-1.17,.18-2.4,.34-3.69,.46-1.29,.13-2.54,.23-3.76,.3l-.25,1.45c-.13,.75-.17,1.32-.11,1.7,.06,.38,.18,.69,.39,.95,.26,.3,.66,.56,1.21,.76,.55,.2,1.31,.36,2.28,.47,.97,.11,2.19,.18,3.66,.21,.24,0,.45,.09,.62,.26,.17,.17,.24,.39,.23,.64,0,.24-.09,.45-.26,.61-.17,.16-.38,.24-.62,.24Zm3.49-8.5c-.16,.1-.33,.13-.52,.07-.18-.05-.33-.16-.43-.32-.14-.24-.29-.5-.47-.76-.17-.26-.35-.51-.53-.73-.1-.13-.15-.29-.13-.46,.02-.17,.1-.31,.25-.41,.16-.11,.33-.15,.5-.12,.17,.04,.32,.12,.45,.26,.15,.17,.34,.4,.56,.69,.22,.29,.41,.55,.56,.79,.11,.16,.14,.34,.09,.53-.05,.19-.16,.34-.32,.46Zm1.82-1.33c-.15,.12-.32,.15-.51,.11-.19-.04-.34-.14-.44-.3-.32-.51-.68-.99-1.06-1.45-.11-.14-.16-.29-.15-.46s.08-.31,.23-.42c.17-.13,.33-.17,.5-.13,.17,.04,.32,.12,.45,.24,.17,.16,.36,.38,.59,.67,.23,.29,.42,.54,.57,.76,.12,.15,.16,.32,.12,.52-.03,.19-.13,.35-.29,.46Zm2.42,11.46c-.23,.06-.46,.03-.67-.09-.22-.12-.36-.3-.42-.53-.06-.23-.04-.46,.08-.67,.12-.22,.29-.36,.52-.42,1.98-.55,3.82-1.35,5.51-2.39,1.69-1.04,3.11-2.25,4.26-3.64,.72-.88,.44-1.43-.85-1.66l-5.3-.93c-.24-.04-.43-.17-.56-.37s-.19-.43-.14-.67c.04-.24,.16-.43,.36-.57,.2-.14,.42-.19,.66-.15l5.3,.93c1,.18,1.74,.49,2.21,.93,.47,.45,.68,.98,.63,1.6-.05,.62-.37,1.29-.96,2-.23,.27-.47,.54-.73,.81-.26,.27-.54,.54-.83,.81,.52,.58,1.04,1.23,1.58,1.94,.53,.71,1.03,1.39,1.5,2.06s.84,1.22,1.12,1.67c.15,.19,.2,.41,.16,.65-.04,.24-.17,.43-.37,.57-.2,.13-.43,.18-.66,.14s-.43-.17-.57-.37c-.21-.29-.46-.67-.77-1.13-.31-.46-.65-.95-1.02-1.48-.37-.52-.75-1.05-1.13-1.57-.38-.52-.75-.99-1.1-1.42-1.12,.86-2.35,1.63-3.68,2.32-1.34,.68-2.7,1.22-4.09,1.63ZM43.55,26.72c-.23-.07-.44-.13-.84-.2l-2.06-.36c-.39-.07-.57-.09-.84-.13,.08-.26,.14-.47,.2-.86l.63-3.56c.06-.34,.08-.54,.1-.86,.26,.06,.43,.1,.83,.17l1.99,.35c.33,.06,.55,.08,.86,.1l-.15,.87c-.25-.08-.45-.13-.84-.2l-1.9-.33-.24,1.36,1.6,.28c.34,.06,.57,.09,.87,.1l-.15,.86c-.26-.09-.44-.13-.85-.2l-1.61-.28-.27,1.55,1.98,.35c.37,.06,.56,.09,.85,.1l-.15,.88Zm5,.83c-.09-.27-.19-.53-.31-.81l-.68-1.57-1.17,1.24c-.2,.21-.42,.46-.57,.66l-1.2-.21c.48-.43,.59-.53,.76-.7l1.74-1.72-.91-1.93c-.13-.28-.29-.57-.45-.86l1.18,.21c.05,.21,.16,.52,.29,.81l.55,1.25,.93-.99c.31-.34,.41-.46,.55-.66l1.17,.21c-.23,.2-.46,.41-.71,.66l-1.51,1.49,1.05,2.21c.11,.24,.24,.48,.49,.93l-1.21-.21Zm2.43,.43c.08-.26,.14-.48,.2-.84l.63-3.56c.06-.32,.08-.56,.1-.86,.28,.06,.48,.11,.83,.17l1.38,.24c.64,.11,1.06,.34,1.32,.72,.22,.31,.29,.73,.21,1.21-.09,.5-.31,.88-.66,1.13-.38,.27-.85,.34-1.49,.23l-1.26-.22-.19,1.1c-.06,.36-.09,.61-.1,.87l-.97-.17Zm2.66-2.33c.61,.11,.99-.16,1.09-.74,.05-.26,.01-.49-.1-.67-.12-.19-.33-.3-.68-.36l-1.26-.22-.31,1.77,1.26,.22Zm6.41,3.98c-.23-.07-.44-.13-.84-.2l-2.06-.36c-.4-.07-.58-.09-.84-.13,.08-.26,.14-.47,.2-.86l.63-3.56c.06-.34,.08-.54,.1-.86,.26,.06,.43,.1,.83,.17l1.99,.35c.33,.06,.55,.08,.86,.1l-.15,.87c-.25-.08-.45-.13-.84-.2l-1.9-.33-.24,1.36,1.6,.28c.34,.06,.57,.09,.86,.1l-.15,.86c-.26-.09-.44-.13-.85-.2l-1.61-.28-.27,1.55,1.98,.35c.37,.06,.56,.09,.85,.1l-.15,.88Zm4.78,.8c.01-.16-.04-.52-.16-1.11-.2-.97-.38-1.26-.89-1.35l-.98-.17-.24,1.34c-.07,.4-.09,.61-.1,.87l-.98-.17c.09-.27,.13-.45,.2-.85l.63-3.55c.06-.35,.08-.55,.1-.87,.27,.06,.48,.1,.84,.17l1.58,.28c1,.18,1.49,.78,1.33,1.65-.07,.42-.24,.73-.51,.92-.22,.16-.41,.21-.8,.25,.39,.2,.48,.41,.86,2.07,.03,.13,.13,.51,.19,.71l-1.09-.19Zm-.57-3.15c.24,.04,.49,0,.67-.13,.16-.11,.27-.29,.31-.54,.08-.47-.14-.77-.68-.86l-1.35-.24-.27,1.54,1.32,.23Zm4.9-1.49c-.08,.24-.13,.45-.2,.84l-.63,3.54c-.07,.39-.09,.6-.1,.86l-1-.18c.08-.24,.13-.45,.2-.84l.63-3.54c.07-.41,.09-.59,.1-.86l1,.18Zm4.39,6.23c-.23-.07-.44-.13-.84-.2l-2.06-.36c-.4-.07-.58-.09-.84-.13,.09-.26,.14-.47,.2-.86l.63-3.56c.06-.34,.08-.54,.1-.86,.26,.06,.43,.1,.83,.17l1.99,.35c.33,.06,.55,.08,.86,.1l-.15,.87c-.25-.08-.45-.13-.84-.2l-1.9-.33-.24,1.36,1.6,.28c.34,.06,.57,.09,.86,.1l-.15,.86c-.26-.09-.44-.13-.85-.2l-1.61-.28-.27,1.55,1.98,.35c.37,.06,.56,.09,.85,.1l-.15,.88Zm4.86,.81c-.07-.24-.16-.46-.3-.78l-1.25-2.86c-.09-.22-.2-.53-.31-.87q-.01,.09-.03,.34c-.02,.13-.05,.43-.08,.58l-.38,2.16c-.08,.44-.11,.75-.12,1l-.96-.17c.07-.21,.15-.54,.23-.99l.6-3.4c.06-.34,.09-.58,.1-.86l1.03,.18c.03,.18,.11,.39,.28,.77l1.23,2.8c.12,.27,.27,.64,.36,.93,.02-.26,.07-.66,.12-.94l.39-2.21c.07-.39,.1-.66,.11-.92l.96,.17c-.09,.26-.14,.5-.21,.9l-.61,3.49c-.06,.37-.1,.62-.1,.86l-1.04-.18Zm7.39-.35c-.21,.45-.37,.69-.62,.91-.46,.39-1.13,.54-1.93,.4-.72-.13-1.25-.45-1.58-.93-.38-.56-.5-1.35-.35-2.2,.15-.87,.56-1.59,1.15-1.99,.47-.33,1.1-.45,1.76-.34,.51,.09,.89,.26,1.21,.54,.26,.24,.46,.52,.57,.84,.05,.15,.08,.28,.11,.54l-.95,.05c-.04-.31-.08-.44-.18-.62-.18-.31-.48-.51-.89-.58-.94-.17-1.63,.47-1.85,1.68-.21,1.21,.24,2.06,1.16,2.22,.46,.08,.89-.03,1.15-.3,.14-.15,.22-.27,.32-.57l.91,.33Zm4.85,2.55c-.23-.07-.44-.13-.84-.2l-2.06-.36c-.39-.07-.57-.09-.84-.13,.08-.26,.14-.47,.2-.86l.63-3.56c.06-.34,.08-.54,.1-.86,.26,.06,.43,.1,.83,.17l1.99,.35c.33,.06,.55,.08,.86,.1l-.15,.87c-.25-.08-.45-.13-.84-.2l-1.9-.33-.24,1.36,1.6,.28c.34,.06,.57,.09,.87,.1l-.15,.86c-.26-.09-.44-.13-.85-.2l-1.61-.28-.27,1.55,1.98,.35c.37,.06,.56,.09,.85,.1l-.15,.88Zm-30.52,84.97c-3.5,0-7.03-.31-10.54-.93C17,113.33-4.83,82.15,.92,49.58,6.66,17,37.82-4.83,70.41,.92c15.78,2.78,29.53,11.54,38.72,24.67,9.19,13.12,12.72,29.05,9.94,44.83h0c-2.78,15.78-11.54,29.53-24.67,38.72-10.2,7.14-22.09,10.86-34.28,10.86Zm-.16-118.03C32.35,1.97,7.81,21.81,2.86,49.92c-5.55,31.51,15.56,61.66,47.06,67.21,15.27,2.69,30.66-.72,43.35-9.61,12.7-8.89,21.17-22.19,23.86-37.45h0c2.69-15.26-.72-30.66-9.61-43.35-8.89-12.69-22.19-21.17-37.45-23.86-3.39-.6-6.77-.89-10.1-.89Z"></path>
				</svg>
			</figure>
		</section>
	 );
 };
 
 export default Edit;